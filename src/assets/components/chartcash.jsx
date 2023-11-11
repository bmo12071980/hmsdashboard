import React from "react";
import ReactDOM from "react-dom/client";

import ReactApexChart from 'react-apexcharts'; 

export const  ApexChartrtscat=()=>

    
          
      {
       
          
     
          
      
          
       
       const     series= [{
              name: 'النقد',
              type: 'column',
              data: [440, 505, 414, 671]
            }, {
              name: 'الشركات',
              type: 'line',
              data: [23, 42, 35, 27]
            }];
          const   options= {
              chart: {
                height: 350,
                type: 'line',
              },
              stroke: {
                width: [0, 4]
              },
              title: {
                text: 'Traffic Sources'
              },
              dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
              },
              labels: ['الباطنية والقلب', 'الطواريء', 'الاسنان', 'النساءوالولادة'],
              xaxis: {
                type: 'datetime'
              },
              yaxis: [{
                title: {
                  text: 'Website Blog',
                },
              
              }, {
                opposite: true,
                title: {
                  text: 'Social Media'
                }
              }]
            };
          
          
    

      

     
          return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="line" height={350} />
              </div>
           
            </div>
          );
        }
      


      

   