'use client';

import { TimeRange } from '@/lib/types';

interface ReturnsTableProps {
  returns: {
    timeRange: TimeRange;
    indiaVentureReturn: number;
    nifty50Return: number;
  }[];
}

export default function ReturnsTable({ returns }: ReturnsTableProps) {
  // Filter out 'ALL' and only show 1Y, 3Y, 5Y
  const filteredReturns = returns.filter(r => r.timeRange !== 'ALL');

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-serif font-semibold text-gray-900">Index</th>
            {filteredReturns.map((item) => (
              <th key={item.timeRange} className="text-right py-3 px-4 font-serif font-semibold text-gray-900">
                {item.timeRange}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="py-3 px-4 text-gray-700 font-medium">India Venture Index</td>
            {filteredReturns.map((item) => (
              <td
                key={item.timeRange}
                className={`py-3 px-4 text-right font-semibold ${
                  item.indiaVentureReturn >= 0 ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {item.indiaVentureReturn >= 0 ? '+' : ''}{item.indiaVentureReturn.toFixed(2)}%
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="py-3 px-4 text-gray-700 font-medium">Nifty 50</td>
            {filteredReturns.map((item) => (
              <td
                key={item.timeRange}
                className={`py-3 px-4 text-right font-semibold ${
                  item.nifty50Return >= 0 ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {item.nifty50Return >= 0 ? '+' : ''}{item.nifty50Return.toFixed(2)}%
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
