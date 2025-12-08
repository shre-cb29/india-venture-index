import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}

export default function SummaryCard({ title, value, change, icon }: SummaryCardProps) {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-emerald-600 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-white">{value}</p>
        {change !== undefined && (
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
            <span className="text-sm font-semibold">{Math.abs(change).toFixed(2)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
