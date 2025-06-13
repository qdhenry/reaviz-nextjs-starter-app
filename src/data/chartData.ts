export interface ChartDataPoint {
  key: string | Date;
  data: number;
  id: string;
}

// Sample trending data for the background chart
export const sparklineData: ChartDataPoint[] = [
  { id: '1', key: new Date('2024-01-01'), data: 100 },
  { id: '2', key: new Date('2024-02-01'), data: 120 },
  { id: '3', key: new Date('2024-03-01'), data: 150 },
  { id: '4', key: new Date('2024-04-01'), data: 180 },
  { id: '5', key: new Date('2024-05-01'), data: 220 },
  { id: '6', key: new Date('2024-06-01'), data: 250 },
  { id: '7', key: new Date('2024-07-01'), data: 300 },
  { id: '8', key: new Date('2024-08-01'), data: 350 },
  { id: '9', key: new Date('2024-09-01'), data: 400 },
  { id: '10', key: new Date('2024-10-01'), data: 480 },
  { id: '11', key: new Date('2024-11-01'), data: 520 },
  { id: '12', key: new Date('2024-12-01'), data: 600 },
];

export interface PackageInfo {
  name: string;
  description: string;
  color: string;
  icon: string;
  url: string;
}

export const reaPackages: PackageInfo[] = [
  {
    name: 'Reagraph',
    description: 'Beautiful network graphs and visualizations',
    color: 'from-blue-500 to-cyan-500',
    icon: '🕸️',
    url: 'https://reagraph.dev/?path=/docs/docs-intro--docs'
  },
  {
    name: 'Reablocks',
    description: 'Modern UI component library',
    color: 'from-purple-500 to-pink-500', 
    icon: '🧱',
    url: 'https://storybook.reablocks.dev/'
  },
  {
    name: 'Reaviz',
    description: 'Data visualization and charting library',
    color: 'from-green-500 to-emerald-500',
    icon: '📊',
    url: 'https://storybook.reaviz.dev/?path=/docs/docs-intro--docs'
  },
  {
    name: 'Reachat',
    description: 'Chat components and messaging UI',
    color: 'from-orange-500 to-red-500',
    icon: '💬',
    url: 'https://storybook.reachat.dev/?path=/docs/docs-intro--docs'
  }
];