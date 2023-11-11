import React from "react";
import ReactDOM from "react-dom/client";

import ReactApexChart from 'react-apexcharts'; 

export const  ApexChartsale2=()=>

      {    
  const          series= [{
              name: 'القلب',
              type: 'column',
              data: [1000,200, 300]
            }, {
              name: 'الباطنية',
              type: 'column',
              data: [400,250,700]
            },
             {
                name: 'الطواريء',
                type: 'column',
                data: [1000,2500,100]
              },
            {
              name: 'الاسنان',
              type: 'column',
              data: [400,200,300]
            }];

const            options= {
              chart: {
                height: 350,
                type: 'line',
              
                stacked: false
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: [1, 1, 1,4]
              },
              title: {
                text: '',
                align: 'left',
                offsetX: 110
              },
              xaxis: {
                categories: [2021,2022,2023],
              },
              yaxis: [
                {
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#008FFB'
                  },
                  labels: {
                    style: {
                      colors: '#008FFB',
                    }
                  },
                  title: {
                    text: "",
                    style: {
                      color: '#008FFB',
                    }
                  },
                  tooltip: {
                    enabled: true
                  }
                },
         
              ],
              tooltip: {
                fixed: {
                  enabled: true,
                  position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                  offsetY: 30,
                  offsetX: 60
                },
              },
              legend: {
                horizontalAlign: 'left',
                offsetX: 50
              }
            };
          
         
       
          return (
            <>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="line" height={350} />
              </div>
            </>
          );
        }
    
    