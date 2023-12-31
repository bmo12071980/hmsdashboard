import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
const  ApexChart23 =()=>
 {
const [series,setSeries]=useState([25, 15, 44, 55, 41, 17]);
   


        
 const   options= {
              chart: {
                width: '100%',
                type: 'pie',
              },
              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              theme: {
                monochrome: {
                  enabled: true
                }
              },
              plotOptions: {
                pie: {
                  dataLabels: {
                    offset: -5
                  }
                }
              },
              title: {
                text: "Monochrome Pie"
              },
              dataLabels: {
                formatter(val, opts) {
                  const name = opts.w.globals.labels[opts.seriesIndex]
                  return [name, val.toFixed(1) + '%']
                }
              },
              legend: {
                show: false
              }
            }
          
              

        

      

       
          return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="pie" />
              </div>
            </div>
          );
 }
 export default ApexChart23;
       
      

    