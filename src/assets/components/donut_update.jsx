import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'; 
const UpdatepPie=()=>{
    const [series, setSeries] = useState([44, 55, 13, 33]);
  
     const       options= {
              chart: {
                width: 380,
                type: 'donut',
              },
              dataLabels: {
                enabled: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }],
              legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
              }
            };
         

      
      function   appendData() {
        var arr=[...series];
           arr = series.slice()
          arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
        
          setSeries(arr);
          
        }
        
     function   removeData() {
          if(series.length === 1) return
          var arr=[...series];
           arr = series.slice()
          arr.pop()
        
          setSeries(arr);
          
        }
        
     function   randomize() {
          
            setSeries(series.map(function() {
              return Math.floor(Math.random() * (100 - 1 + 1)) + 1
            })
            )
        }
        
      function  reset() {
          setSeries([44, 55, 13, 33]);
    
        }
      

       
          return (
            <div>
              <div>
                <div className="chart-wrap">
                  <div id="chart">
                <ReactApexChart options={options} series={series} type="donut" width={380} />
              </div>
                </div>
              
                <div className="actions">
                  <button
                      
                      onClick={appendData}
                      >
                    + ADD
                  </button>
                  &nbsp;
                  <button
                      
                      onClick={removeData}
                      >
                    - REMOVE
                  </button>
                  &nbsp;
                  <button
                      
                      onClick={randomize}
                      >
                    RANDOMIZE
                  </button>
                  &nbsp;
                  <button
                      
                      onClick={reset}
                      >
                    RESET
                  </button>
                </div>
              </div>
           
            </div>
          );
        }
        export default UpdatepPie;