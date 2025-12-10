'use client';

import { useEffect, useState } from 'react';
import { Activity, TrendingUp, Calendar } from 'lucide-react';
import IndexChart from '@/components/IndexChart';
import SummaryCard from '@/components/SummaryCard';
import { IndexData, TimeRange } from '@/lib/types';
import { parseIndexData, filterDataByTimeRange, calculateSummaryStats } from '@/lib/parseData';

export default function Home() {
  const [allData, setAllData] = useState<IndexData[]>([]);
  const [filteredData, setFilteredData] = useState<IndexData[]>([]);
  const [timeRange, setTimeRange] = useState<TimeRange>('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await parseIndexData();
        setAllData(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (allData.length > 0) {
      const filtered = filterDataByTimeRange(allData, timeRange);
      setFilteredData(filtered);
    }
  }, [timeRange, allData]);

  const stats = calculateSummaryStats(allData);

  const timeRangeButtons: TimeRange[] = ['1Y', '3Y', '5Y', 'ALL'];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-emerald-600 text-xl font-semibold">Loading data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">India Venture Index Dashboard</h1>
          <p className="text-gray-600">
            Track the performance of India&apos;s VC-backed startup ecosystem vs. Nifty 50
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <SummaryCard
            title="Current Index Level"
            value={stats.currentIndexLevel.toFixed(2)}
            icon={<Activity className="h-5 w-5" />}
          />
          <SummaryCard
            title="Year-to-Date Return"
            value={`${stats.ytdReturn >= 0 ? '+' : ''}${stats.ytdReturn.toFixed(2)}%`}
            change={stats.ytdReturn}
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <SummaryCard
            title="Last Updated"
            value={stats.currentDate}
            icon={<Calendar className="h-5 w-5" />}
          />
        </div>

        <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Performance</h2>
          <div className="flex space-x-2">
            {timeRangeButtons.map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <IndexChart data={filteredData} />

        <div className="mt-6 md:mt-8 bg-white rounded-lg p-4 md:p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">About the Index</h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            The India Venture Index (IND-V) tracks the performance of approximately 30 VC-backed Indian
            &quot;New Economy&quot; companies listed on NSE/BSE. The index is rebased to 100 as of January 1, 2021,
            providing a clear benchmark to compare against traditional market indices like Nifty 50.
          </p>
          <p className="text-gray-600 text-xs md:text-sm">
            Base Date: January 1, 2021 | Base Value: 100.00 | Weighting: Total Market Capitalization
          </p>
        </div>
      </div>
    </div>
  );
}
