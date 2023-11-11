import React from "react";
import ReactDOM from "react-dom/client";

import ReactApexChart from 'react-apexcharts'; 

export const  ApexChartrader=()=>

    
          
      {
       
          
     
          
      
          
         const   series= [{
              name: 'النقد',
              data: [80, 50, 30, 40, 100, 20],
            }, {
              name: 'الشركات',
              data: [20, 30, 40, 80, 20, 80],
            }, {
              name: 'الداخلي',
              data: [44, 76, 78, 13, 43, 10],
            }];
        const    options={
              chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                  enabled: true,
                  blur: 1,
                  left: 1,
                  top: 1
                }
              },
              title: {
                text: 'Radar Chart - Multi Series'
              },
              stroke: {
                width: 2
              },
              fill: {
                opacity: 0.1
              },
              markers: {
                size: 0
              },
              xaxis: {
                categories: ['الباطنية والقلب', 'الانف والاذن والحنجرة', 'النساء والولادة', 'الطواريء', 'المخ والاعصاب', 'الاسنان']
              }
            };
          
          
         
      

          return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="radar" height={350} />
              </div>
            </div>
          );
        }
      


      

      