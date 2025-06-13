import { AreaSparklineChart } from 'reaviz';
import { sparklineData } from '../../data/chartData';

export const BackgroundChart = () => {
  return (
    <div className="absolute inset-0 opacity-30 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center scale-150">
        <AreaSparklineChart
          id="area"
          data={sparklineData}
          width={800}
          height={200}
        />
      </div>
    </div>
  );
};