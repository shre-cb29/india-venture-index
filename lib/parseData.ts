import Papa from 'papaparse';
import { IndexData, SummaryStats, TimeRange, CompanyData } from './types';

export async function parseIndexData(): Promise<IndexData[]> {
  const response = await fetch('/India Venture Index - Index - v2.csv');
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data: IndexData[] = results.data
          .map((row: any) => {
            // Skip rows with empty dates
            if (!row.Date || !row['India Venture Index']) return null;

            // Parse the date (format: DD-MMM-YY)
            const dateParts = row.Date.split('-');
            const monthMap: { [key: string]: number } = {
              'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
              'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
            };

            const day = parseInt(dateParts[0]);
            const month = monthMap[dateParts[1]];
            const year = 2000 + parseInt(dateParts[2]);
            const date = new Date(year, month, day);

            // Remove commas and parse numbers
            const nifty50 = parseFloat(row['Nifty 50']?.replace(/,/g, '') || '0');
            const nifty50Rebased = parseFloat(row['Nifty (base to 100)'] || '0');
            const indiaVentureIndex = parseFloat(row['India Venture Index'] || '0');

            return {
              date,
              nifty50,
              nifty50Rebased,
              indiaVentureIndex,
            };
          })
          .filter((item): item is IndexData => item !== null);

        resolve(data);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
}

export function filterDataByTimeRange(data: IndexData[], range: TimeRange): IndexData[] {
  if (range === 'ALL') return data;

  const now = new Date();
  const cutoffDate = new Date();

  switch (range) {
    case '1Y':
      cutoffDate.setFullYear(now.getFullYear() - 1);
      break;
    case '3Y':
      cutoffDate.setFullYear(now.getFullYear() - 3);
      break;
    case '5Y':
      cutoffDate.setFullYear(now.getFullYear() - 5);
      break;
  }

  return data.filter(item => item.date >= cutoffDate);
}

export function calculateSummaryStats(data: IndexData[]): SummaryStats {
  if (data.length === 0) {
    return {
      currentIndexLevel: 0,
      ytdReturn: 0,
      currentDate: '',
    };
  }

  const latestData = data[data.length - 1];
  const currentYear = latestData.date.getFullYear();

  // Find the first data point of the current year
  const ytdStartData = data.find(item => item.date.getFullYear() === currentYear);

  const ytdReturn = ytdStartData
    ? ((latestData.indiaVentureIndex - ytdStartData.indiaVentureIndex) / ytdStartData.indiaVentureIndex) * 100
    : 0;

  return {
    currentIndexLevel: latestData.indiaVentureIndex,
    ytdReturn,
    currentDate: latestData.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  };
}

export function calculateReturns(data: IndexData[], timeRange: TimeRange): { indiaVentureReturn: number; nifty50Return: number } {
  if (data.length === 0) {
    return { indiaVentureReturn: 0, nifty50Return: 0 };
  }

  const latestData = data[data.length - 1];
  const now = new Date();
  const cutoffDate = new Date();

  switch (timeRange) {
    case '1Y':
      cutoffDate.setFullYear(now.getFullYear() - 1);
      break;
    case '3Y':
      cutoffDate.setFullYear(now.getFullYear() - 3);
      break;
    case '5Y':
      cutoffDate.setFullYear(now.getFullYear() - 5);
      break;
    case 'ALL':
      // Use the first data point
      const firstData = data[0];
      const indiaVentureReturn = ((latestData.indiaVentureIndex - firstData.indiaVentureIndex) / firstData.indiaVentureIndex) * 100;
      const nifty50Return = ((latestData.nifty50Rebased - firstData.nifty50Rebased) / firstData.nifty50Rebased) * 100;
      return { indiaVentureReturn, nifty50Return };
  }

  // Find the closest data point to the cutoff date
  const startData = data.reduce((prev, curr) => {
    return Math.abs(curr.date.getTime() - cutoffDate.getTime()) < Math.abs(prev.date.getTime() - cutoffDate.getTime())
      ? curr
      : prev;
  });

  const indiaVentureReturn = ((latestData.indiaVentureIndex - startData.indiaVentureIndex) / startData.indiaVentureIndex) * 100;
  const nifty50Return = ((latestData.nifty50Rebased - startData.nifty50Rebased) / startData.nifty50Rebased) * 100;

  return { indiaVentureReturn, nifty50Return };
}

export async function calculateTotalMarketCap(): Promise<number> {
  try {
    const companies = await parseCompanyData();
    const totalMarketCap = companies.reduce((sum, company) => sum + company.currentValuation, 0);
    return totalMarketCap;
  } catch (error) {
    console.error('Error calculating market cap:', error);
    return 0;
  }
}

export async function parseCompanyData(): Promise<CompanyData[]> {
  const response = await fetch('/India Venture Index - Lifetime returns.csv');
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data: CompanyData[] = results.data
          .map((row: any) => {
            // Skip rows with empty company names or placeholder entries
            if (!row.Company || row.Company.trim() === '' || !row['Listing date']) return null;

            // Parse the date (format: DD-MMM-YY)
            const dateParts = row['Listing date'].split('-');
            const monthMap: { [key: string]: number } = {
              'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
              'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
            };

            const day = parseInt(dateParts[0]);
            const month = monthMap[dateParts[1]];
            const year = 2000 + parseInt(dateParts[2]);
            const listingDate = new Date(year, month, day);

            // Remove commas and parse numbers
            const ipoValuation = parseFloat(row['IPO valuation']?.replace(/,/g, '') || '0');
            const currentValuation = parseFloat(row['30-Nov-25']?.replace(/,/g, '') || '0');

            return {
              listingDate,
              ticker: row.Ticker || '',
              company: row.Company || '',
              ipoValuation,
              currentValuation,
              allTimeReturn: row['All time return'] || '',
              listingYear: year,
            };
          })
          .filter((item): item is CompanyData => item !== null);

        resolve(data);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
}
