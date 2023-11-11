import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { signal } from "@preact/signals-react";

const worldElectricityProduction = [
  
  {
    country: 'hms',
    year: 2021,
   
    bio: 602,
    solar: 850,
    wind: 1587,
    hydro: 4341,
    nuclear: 2634,
    total:5000,
   
   
  },
  {
    country: 'hms',
    year: 2022,
   
    bio: 663,
    solar: 1040,
    wind: 1849,
    hydro: 4244,
    nuclear: 2740,
   total:7000,
   
  },
  {
    country: 'hms',
    year: 2023,
  
    bio: 677,
    solar: 1289,
    wind: 2139,
    hydro: 4326,
    nuclear: 2610,
    total:4500,

   
  },
];

const keyToLabel = {
  
 
  nuclear: 'امراض النساء والولادة',
  hydro: 'امراض عيادة الاسنان',
  wind: 'امراض عيادة الانف والاذن والحنجرة',
  solar: 'امراض عيادة الطواريء',
  bio: 'امراض عيادة الباطنية والقلب',
 
};

const colors = {
 
  bio: 'lightgreen',
  solar: 'yellow',
  wind: 'lightblue',
  hydro: 'blue',
  nuclear: 'orange',
 
  
};

const stackStrategy = {
  stack: 'total',
  area: true,
  stackOffset: 'none', // To stack 0 on top of others
};

const customize = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 5 },
  stackingOrder: 'descending',
};

export default function LineDataset() {
  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (v) => v.toString(),
          min: 2021,
          max: 2023,
          
        },
      ]}
      series={Object.keys(keyToLabel).map((key) => ({
        dataKey: key,
        label: keyToLabel[key],
        color: colors[key],
        showMark: true,
        ...stackStrategy,
      }))}
      dataset={worldElectricityProduction}
      {...customize}
    />
  );
 

}
const Linedata=()=>
{
    return(
    signal({LineDataset}));

}

export  {Linedata};