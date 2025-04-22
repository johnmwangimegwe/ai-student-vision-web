
import { FunnelChart as RechartsFunnelChart, Funnel, LabelList, ResponsiveContainer, Tooltip } from 'recharts';

interface FunnelChartProps {
  data: Array<{ name: string; value: number }>;
  colors?: string[];
  title?: string;
  height?: number;
}

export function FunnelChart({ 
  data, 
  colors = ['#10b981', '#14b8a6', '#2dd4bf', '#5eead4', '#99f6e4', '#ccfbf1'], 
  title,
  height = 300 
}: FunnelChartProps) {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsFunnelChart>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              formatter={(value: number) => [`${value}%`, 'Percentage']}
            />
            <Funnel
              dataKey="value"
              data={data}
              isAnimationActive
            >
              <LabelList position="right" fill="var(--foreground)" dataKey="name" />
              {data.map((entry, index) => (
                <Funnel 
                  key={`funnel-${index}`}
                  dataKey="value" 
                  fill={colors[index % colors.length]}
                  stroke={colors[index % colors.length]}
                />
              ))}
            </Funnel>
          </RechartsFunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
