import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  subtitle?: string;
}

export default function SummaryCard({ title, value, change, icon, subtitle }: SummaryCardProps) {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-emerald-500 transition-colors shadow-sm">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div>
          <h3 className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-gray-500">{icon}</div>}
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl md:text-3xl font-bold text-gray-900">{value}</p>
        {change !== undefined && (
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="h-4 w-4 md:h-5 md:w-5" /> : <TrendingDown className="h-4 w-4 md:h-5 md:w-5" />}
            <span className="text-xs md:text-sm font-semibold">{Math.abs(change).toFixed(2)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
