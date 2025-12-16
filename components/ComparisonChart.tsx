'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IndexData } from '@/lib/types';

interface ComparisonChartProps {
  data: IndexData[];
}

export default function ComparisonChart({ data }: ComparisonChartProps) {
  const chartData = data.map(item => ({
    date: item.date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
    'India Venture Index': item.indiaVentureIndex,
    'Nifty 50 (rebase to 100)': item.nifty50Rebased,
  }));

  return (
    <div className="w-full h-[430px] md:h-[530px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="date"
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickLine={{ stroke: '#6B7280' }}
            height={60}
          />
          <YAxis
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickLine={{ stroke: '#6B7280' }}
            domain={[0, 200]}
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
            wrapperStyle={{
              paddingTop: '10px',
            }}
            iconType="line"
            iconSize={18}
          />
          <Line
            type="monotone"
            dataKey="India Venture Index"
            stroke="#059669"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Nifty 50 (rebase to 100)"
            stroke="#2563EB"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
