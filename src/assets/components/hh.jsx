import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'; 

const  ApexChartlinedata=()=> {
       const       series= [
              {
                name: "جديد",
                data: [28, 29, 33, 36, 32]
              },
              {
                name: "مراجعة ",
                data: [12, 11, 14, 18, 17]
              },
              {
              name:"داخلي",
              data:[10,13,12,22,30]
              },
            ];
         const   options= {
              chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#77B6EA', '#545454','#39dd3c'],
              dataLabels: {
                enabled: true,
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: '',
                align: 'left'
              },
              grid: {
                borderColor: '#e7e7e7',
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              markers: {
                size: 1
              },
              xaxis: {
                categories: ['الباطنية والقلب', 'الطواريء', 'الاسنان', 'النساء والولادة','الانف والاذن والحنجرة'],
                title: {
                  text: ''
                             },
                             style: {
                              color: '#008FFB',
                            }
                             
              },
              yaxis: {
                title: {
                  text: ''
                },
                min: 5,
                max: 40
              },
              legend: {
                position: 'top',
                horizontalAlign: 'center',
                floating: true,
                offsetY: 15,
                offsetX: 20,
                colors: ['#77B6EA', '#545454','#39dd3c'],
              }
           
          
          };
       

      

       
          return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="line" height={350} />
              </div>
           
            </div>
          );
        }
      export default ApexChartlinedata;
