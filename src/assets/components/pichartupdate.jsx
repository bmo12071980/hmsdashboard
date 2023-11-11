import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart1 = () => {
  const [series, setSeries] = useState([44, 55, 13, 33,70,40]);
  
  const options = {
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

  const appendData = () => {
    const arr = [...series];
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setSeries(arr);
  };

  const removeData = () => {
    const arr = [...series];
    arr.pop();
    setSeries(arr);
  };

  const randomize = () => {
    const arr = series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setSeries(arr);
  };

  const reset = () => {
    setSeries([44, 55, 13, 33,70,40]);
  };

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" width={380} />
        </div>
      </div>
    
      <div className="actions">
        <button onClick={appendData}>+ ADD</button>
        &nbsp;
        <button onClick={removeData}>- REMOVE</button>
        &nbsp;
        <button onClick={randomize}>RANDOMIZE</button>
        &nbsp;
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default ApexChart1;