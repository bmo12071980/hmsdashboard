import React from "react";
import ReactDOM from "react-dom/client";

import ReactApexChart from 'react-apexcharts'; 

export const  ApexChartfredial=()=>

    
          
      {
       
          
     
          
     
        const         series=[44, 55, 67, 83]
         const   options=  {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 245
                      }
                    }
                  }
                }
              },
              labels: ['الباطنية والقلب', 'الاسنان', 'الطواريء', 'المخ والاعصاب'],
            };
          
          
             return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="radialBar" height={350} />
              </div>
             
            </div>
          );
        }
      