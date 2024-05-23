import React, { type FC } from 'react';
import { Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { type IChart } from '../ExerciseCard';

interface IProps {
  chartData: IChart;
}

export const Chart: FC<IProps> = ({ chartData }) => {
  return (
    <>
      <Typography>Chart</Typography>
      <LineChart
        xAxis={[
          {
            data: chartData.xAxis,
            scaleType: 'point',
          },
        ]}
        series={[
          {
            data: chartData.series,
          },
        ]}
        height={300}
        margin={{ top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </>
  );
};

export default Chart;
