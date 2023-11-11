import React from "react";
import ReactDOM from "react-dom/client";

import ReactApexChart from 'react-apexcharts'; 

export const  ApexChartrtscat=()=>

    
          
      {
       
          
     
          
      
          
       
         
  const          series= [
              {
                type: 'rangeArea',
                name: 'cash',
            
                data: [
                  {
                    x: 'الباطنية',
                    y: [1100, 1900]
                  },
                  {
                    x: 'الاذن',
                    y: [1200, 1800]
                  },
                  {
                    x: 'الطواريء',
                    y: [900, 2900]
                  },
                  {
                    x: 'الاسنان',
                    y: [1400, 2700]
                  },
                  {
                    x: 'النساءوالولادة',
                    y: [2600, 3900]
                  },
                  
                ]
              },
            
              {
                type: 'rangeArea',
                name: 'الشركات',
                data: [
                  {
                    x: 'الباطنية',
                    y: [3100, 3400]
                  },
                  {
                    x: 'الاذن',
                    y: [4200, 5200]
                  },
                  {
                    x: 'الطواريء',
                    y: [3900, 4900]
                  },
                  {
                    x: 'الاسنان',
                    y: [3400, 3900]
                  },
                  {
                    x: 'النساءوالولادة',
                    y: [5100, 5900]
                  },
                 
                ]
              }
            ];
const            options= {
              chart: {
                height: 350,
                type: 'rangeArea',
                animations: {
                  speed: 500
                }
              },
              colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
              dataLabels: {
                enabled: false
              },
              fill: {
                opacity: [0.24, 0.24, 1, 1]
              },
              forecastDataPoints: {
                count: 2
              },
              stroke: {
                curve: 'straight',
                width: [0, 0, 2, 2]
              },
              legend: {
                show: true,
                customLegendItems: ['الشركات', 'النقد'],
                inverseOrder: true
              },
              title: {
                text: 'Range Area with Forecast Line (Combo)'
              },
              markers: {
                hover: {
                  sizeOffset: 5
                }
              }
            };
          
         

        
          return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="rangeArea" height={350} />
              </div>
             
            </div>
          );
       
      }

    