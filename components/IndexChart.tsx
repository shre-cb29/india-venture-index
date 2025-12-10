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
    <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] bg-white rounded-lg p-4 md:p-6 border border-gray-200 shadow-sm">
      <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">India Venture Index vs Nifty 50</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="date"
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickLine={{ stroke: '#6B7280' }}
          />
          <YAxis
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickLine={{ stroke: '#6B7280' }}
            label={{ value: 'Index Value (Base = 100)', angle: -90, position: 'insideLeft', fill: '#6B7280', fontSize: 14 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              color: '#111827',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: '#111827', fontWeight: 600 }}
          />
          <Legend
            wrapperStyle={{ color: '#374151' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="India Venture Index"
            stroke="#059669"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Nifty 50"
            stroke="#2563EB"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
