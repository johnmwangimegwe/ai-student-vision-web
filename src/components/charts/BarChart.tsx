
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  colors?: string[];
  title?: string;
  height?: number;
}

export function BarChart({ data, colors = ['#10b981', '#0d9488', '#0f766e'], title, height = 300 }: BarChartProps) {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'var(--foreground)' }}
              tickLine={{ stroke: 'var(--foreground)' }}
              axisLine={{ stroke: 'var(--foreground)' }}
            />
            <YAxis 
              tick={{ fill: 'var(--foreground)' }}
              tickLine={{ stroke: 'var(--foreground)' }}
              axisLine={{ stroke: 'var(--foreground)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
            />
            <Legend />
            <Bar dataKey="value" fill={colors[0]} name="Value" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
