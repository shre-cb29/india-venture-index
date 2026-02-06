'use client';

import { useEffect, useState } from 'react';
import { Activity, TrendingUp, Building2 } from 'lucide-react';
import VentureIndexChart from '@/components/VentureIndexChart';
import ComparisonChart from '@/components/ComparisonChart';
import ReturnsTable from '@/components/ReturnsTable';
import SummaryCard from '@/components/SummaryCard';
import { IndexData, TimeRange } from '@/lib/types';
import { parseIndexData, filterDataByTimeRange, calculateSummaryStats, calculateReturns, calculateTotalMarketCap } from '@/lib/parseData';

export default function Home() {
  const [allData, setAllData] = useState<IndexData[]>([]);
  const [filteredDataVenture, setFilteredDataVenture] = useState<IndexData[]>([]);
  const [filteredDataComparison, setFilteredDataComparison] = useState<IndexData[]>([]);
  const [timeRangeVenture, setTimeRangeVenture] = useState<TimeRange>('ALL');
  const [timeRangeComparison, setTimeRangeComparison] = useState<TimeRange>('ALL');
  const [loading, setLoading] = useState(true);
  const [totalMarketCap, setTotalMarketCap] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      try {
        const [data, marketCap] = await Promise.all([
          parseIndexData(),
          calculateTotalMarketCap(),
        ]);
        setAllData(data);
        setFilteredDataVenture(data);
        setFilteredDataComparison(data);
        setTotalMarketCap(marketCap);
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
      const filteredVenture = filterDataByTimeRange(allData, timeRangeVenture);
      setFilteredDataVenture(filteredVenture);
    }
  }, [timeRangeVenture, allData]);

  useEffect(() => {
    if (allData.length > 0) {
      const filteredComparison = filterDataByTimeRange(allData, timeRangeComparison);
      setFilteredDataComparison(filteredComparison);
    }
  }, [timeRangeComparison, allData]);

  const stats = calculateSummaryStats(allData);

  const timeRangeButtons: TimeRange[] = ['1Y', '3Y', '5Y', 'ALL'];

  // Calculate returns for all time ranges
  const returnsData = timeRangeButtons.map((range) => {
    const returns = calculateReturns(allData, range);
    return {
      timeRange: range,
      indiaVentureReturn: returns.indiaVentureReturn,
      nifty50Return: returns.nifty50Return,
    };
  });

  // Format market cap for display
  const formatMarketCap = (value: number) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)}L Cr`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(2)}K Cr`;
    }
    return `₹${value.toFixed(2)} Cr`;
  };

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
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">
            India Venture Index
          </h1>
          <p className="text-lg text-gray-600">
            Track the returns of India&apos;s venture-backed startups that are now public companies.
          </p>
        </div>

        {/* Section 1: India Venture Index */}
        <div className="mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <SummaryCard
              title="Index Level"
              value={stats.currentIndexLevel.toFixed(2)}
              icon={<Activity className="h-5 w-5" />}
            />
            <SummaryCard
              title="Total Market Cap"
              value={formatMarketCap(totalMarketCap)}
              icon={<Building2 className="h-5 w-5" />}
              subtitle="as of 31 Jan 2026"
            />
            <SummaryCard
              title="YTD Return"
              value={`${stats.ytdReturn >= 0 ? '+' : ''}${stats.ytdReturn.toFixed(2)}%`}
              change={stats.ytdReturn}
              icon={<TrendingUp className="h-5 w-5" />}
            />
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 shadow-sm">
            <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900">India Venture Index</h3>
              <div className="flex space-x-2">
                {timeRangeButtons.map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRangeVenture(range)}
                    className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      timeRangeVenture === range
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <VentureIndexChart data={filteredDataVenture} />
          </div>
        </div>

        {/* Section 2: Performance Comparison */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6">
            Performance Comparison
          </h2>

          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 shadow-sm mb-6">
            <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900">
                India Venture v/s Nifty 50
              </h3>
              <div className="flex space-x-2">
                {timeRangeButtons.map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRangeComparison(range)}
                    className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      timeRangeComparison === range
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <ComparisonChart data={filteredDataComparison} />
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-4">
              Returns Comparison
            </h3>
            <ReturnsTable returns={returnsData} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 mb-6 text-sm text-gray-500">
          <p>Data as of {stats.currentDate}</p>
        </div>
      </div>
    </div>
  );
}
