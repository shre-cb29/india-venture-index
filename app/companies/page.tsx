'use client';

import { useEffect, useState } from 'react';
import { parseCompanyData } from '@/lib/parseData';
import { CompanyData } from '@/lib/types';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await parseCompanyData();
        setCompanies(data);
      } catch (error) {
        console.error('Error loading company data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <p>Loading companies...</p>
      </div>
    );
  }

  // Group companies by listing year
  const companiesByYear: { [year: number]: CompanyData[] } = {};
  companies.forEach((company) => {
    if (!companiesByYear[company.listingYear]) {
      companiesByYear[company.listingYear] = [];
    }
    companiesByYear[company.listingYear].push(company);
  });

  // Sort companies within each year by listing date (newest first)
  Object.keys(companiesByYear).forEach((year) => {
    companiesByYear[Number(year)].sort((a, b) => b.listingDate.getTime() - a.listingDate.getTime());
  });

  // Sort years in descending order (newest first)
  const years = Object.keys(companiesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">Companies</h1>
          <p className="text-lg text-gray-600">
            List of companies included in the index with their IPO valuation and current market capitalization.
          </p>
        </div>

        {years.map((year) => (
          <div key={year} className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-emerald-600">
              {year}
            </h2>
            <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-3 md:px-4 text-gray-700 font-semibold text-sm">
                      Listing Date
                    </th>
                    <th className="text-left py-3 px-3 md:px-4 text-gray-700 font-semibold text-sm">
                      Ticker
                    </th>
                    <th className="text-left py-3 px-3 md:px-4 text-gray-700 font-semibold text-sm">
                      Company
                    </th>
                    <th className="text-right py-3 px-3 md:px-4 text-gray-700 font-semibold text-sm">
                      IPO Valuation (₹ Cr)
                    </th>
                    <th className="text-right py-3 px-3 md:px-4 text-gray-700 font-semibold text-sm">
                      Current Valuation (₹ Cr)<br />
                      <span className="font-normal text-xs text-gray-500">as of 31 Jan 2026</span>
                    </th>
                    <th className="text-right py-3 px-3 md:px-4 text-gray-700 font-semibold text-sm">
                      All-Time Return
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companiesByYear[year].map((company, idx) => {
                    const returnValue = parseFloat(
                      company.allTimeReturn.replace('%', '')
                    );
                    const isPositive = returnValue >= 0;

                    return (
                      <tr
                        key={idx}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-3 md:px-4 text-gray-600 text-sm">
                          {formatDate(company.listingDate)}
                        </td>
                        <td className="py-3 px-3 md:px-4 text-gray-600 text-sm">
                          {company.ticker}
                        </td>
                        <td className="py-3 px-3 md:px-4 text-gray-900 font-medium text-sm">
                          {company.company}
                        </td>
                        <td className="py-3 px-3 md:px-4 text-right text-gray-600 text-sm">
                          {formatNumber(company.ipoValuation)}
                        </td>
                        <td className="py-3 px-3 md:px-4 text-right text-gray-600 text-sm">
                          {company.currentValuation > 0
                            ? formatNumber(company.currentValuation)
                            : '-'}
                        </td>
                        <td
                          className={`py-3 px-3 md:px-4 text-right font-semibold text-sm ${
                            isPositive ? 'text-emerald-600' : 'text-red-600'
                          }`}
                        >
                          {company.allTimeReturn}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="mt-6 md:mt-8 text-xs md:text-sm text-gray-600">
          <p>* Valuations are in Indian Rupees (Crores)</p>
          <p>* Current valuations as of January 31, 2026</p>
        </div>
      </div>
    </div>
  );
}
