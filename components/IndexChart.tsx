'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IndexData } from '@/lib/types';

interface IndexChartProps {
  data: IndexData[];
}

export default function IndexChart({ data }: IndexChartProps) {
  const chartData = data.map(item => ({
    date: item.date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
    'India Venture Index': item.indiaVentureIndex,
    'Nifty 50': item.nifty50Rebased,
  }));

  return (
    <div className="w-full h-[500px] bg-gray-900 rounded-lg p-6 border border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Index Performance Comparison</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="date"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            tickLine={{ stroke: '#9CA3AF' }}
          />
          <YAxis
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            tickLine={{ stroke: '#9CA3AF' }}
            label={{ value: 'Index Value (Base = 100)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F3F4F6',
            }}
            labelStyle={{ color: '#F3F4F6' }}
          />
          <Legend
            wrapperStyle={{ color: '#F3F4F6' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="India Venture Index"
            stroke="#10B981"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Nifty 50"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
