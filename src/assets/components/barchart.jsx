import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
//import Datachart from './datachart';

const chartSetting = {
  yAxis: [
    {
      label: '',
    },
  ],
  width:440,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: `translate(-30px, 0)`,
    },
  },
};
const dataset = [
  {
    الباطنية: 2500,
    الانف: 3500,
    الاسنان:2500,
    الطواريء: 4500,
    النساء:2800,
    typep:'نقدا',
    total:15800
  },
  {
    الباطنية: 1800,
    الانف: 1790,
    الاسنان: 2500,
    الطواريء: 2800,
    
    النساء:500,
   typep: 'شركات',
   total:9390
  },
  {
    الباطنية: 4700,
    الانف: 3554,
    الاسنان: 1068,
    الطواريء: 4500,
    النساء:4000,
    typep: 'خارجي',
    total:17822
  },
  
  
];
// const totals1 = {};
// const totals2 = {};
// const totals3 = {};
// dataset.forEach(data)=>{
//     data.forEach(value,index)=>{
//         if(data.typep==='نقدا')
//         {
//         const catash=data.typep;


//     }
// }

const valueFormatter = (value) => `${value}`;
// function calculateTotals(series) {
//     const totals = {};
  
//     // Iterate over each series
//     series.forEach((dataSeries) => {
//       // Iterate over the data points in the series
//       dataSeries.forEach((value, index) => {
//         const categoryName = dataSeries.name;
//         const categoryTotal = totals[categoryName] || 0;
  
//         // Add the value to the existing total for the category
//         totals[categoryName] = categoryTotal + value;
//       });
//     });
  
//     return totals;
//   }
export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'typep' }]}
      series={[
        { dataKey: 'الباطنية', label: 'عيادة الباطنية والقلب', valueFormatter },
        { dataKey: 'الانف', label: 'عيادة الانف والاذن والحنجرة', valueFormatter },
        { dataKey: 'الاسنان', label: 'عيادة الاسنان', valueFormatter },
        { dataKey: 'الطواريء', label: 'عيادة الطواريء', valueFormatter },
        { dataKey: 'النساء', label: 'عيادة النساءوالولادة', valueFormatter },
        {dataKey:'total',label:'الاجمالي' ,valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}