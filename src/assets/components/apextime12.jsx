import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'; 
import moment from 'moment';

  const ApexChartmm=()=> {
        const [series,setSeries]=useState(
      [
              {
                data: [
                  {
                    x: 'Analysis',
                    y: [
                      new Date('2019-02-27').getTime(),
                      new Date('2019-03-04').getTime()
                    ],
                    fillColor: '#008FFB'
                  },
                  {
                    x: 'Design',
                    y: [
                      new Date('2019-03-04').getTime(),
                      new Date('2019-03-08').getTime()
                    ],
                    fillColor: '#00E396'
                  },
                  {
                    x: 'Coding',
                    y: [
                      new Date('2019-03-07').getTime(),
                      new Date('2019-03-10').getTime()
                    ],
                    fillColor: '#775DD0'
                  },
                  {
                    x: 'Testing',
                    y: [
                      new Date('2019-03-08').getTime(),
                      new Date('2019-03-12').getTime()
                    ],
                    fillColor: '#FEB019'
                  },
                  {
                    x: 'Deployment',
                    y: [
                      new Date('2019-03-12').getTime(),
                      new Date('2019-03-17').getTime()
                    ],
                    fillColor: '#FF4560'
                  }
                ]
              }
            ]);
         const   options= {
            markers: {
                size: 6,
                colors: ['#008FFB', '#00E396', '#775DD0', '#FEB019', '#FF4560'],
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: {
                  size: 8
                }, events: {
                    click: function (event, chartContext, config) {
                      // Handle the marker click event
                      console.log('Marker clicked:', config);
                    }
                  }
                },
            
              chart: {
                height: 350,
                type: 'rangeBar'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                  distributed: true,
                  dataLabels: {
                    hideOverflowingLabels: false
                  }
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function(val, opts) {
                  var label = opts.w.globals.labels[opts.dataPointIndex]
                  var a =  moment(val[0])
                  var b = moment(val[1])
                  var diff = b.diff(a, 'days')
                  return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
                },
                style: {
                  colors: ['#f3f4f5', '#fff']
                }
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                show: false
              },
              grid: {
                row: {
                  colors: ['#f3f4f5', '#fff'],
                  opacity: 1
                }
              }
            };
          
          
            const handleDataPointClick = (event, chartContext, config) => {
                // Handle the data point click event
                console.log('Data point clicked:', config);
              };
            
              const eventHandlers = {
                dataPointSelection: handleDataPointClick
              };
            
      

          return (
            <div>
              <div id="chart">
                <ReactApexChart options={options} series={series} type="rangeBar" height={350}  eventHandlers={eventHandlers}/>
              </div>
           
            </div>
          );
       
      }

export default ApexChartmm;

  

    