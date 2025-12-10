export interface IndexData {
  date: Date;
  nifty50: number;
  nifty50Rebased: number;
  indiaVentureIndex: number;
}

export interface SummaryStats {
  currentIndexLevel: number;
  ytdReturn: number;
  currentDate: string;
}

export interface CompanyData {
  listingDate: Date;
  ticker: string;
  company: string;
  ipoValuation: number;
  currentValuation: number;
  allTimeReturn: string;
  listingYear: number;
}

export type TimeRange = '1Y' | '3Y' | '5Y' | 'ALL';
