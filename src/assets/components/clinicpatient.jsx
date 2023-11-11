import ReactApexChart from 'react-apexcharts';
//import datachart from './datachart';
import Datachart from './datachart';
//import { layouts } from 'chart.js';
const Installment = () => {
    const currentMonthData = [
        { clinic: 'الباطنية والقلب', newpat:200,retpat:500},
        { clinic: 'الطواريء',newpat:400,retpat:-600},
        { clinic: 'المخ  والاعصاب', newpat:350,retpat:200},
        { clinic: 'الانف', newpat:1000,retpat:650},
        { clinic: 'عيادةالاسنان',newpat:250,retpat:470 },
        { clinic: 'النساء والولادة',newpat: 170,retpat:700},

      ];
      
      
     
      const seriesData = currentMonthData.map((item) => ({
        x: item.clinic,
        y: [item.newpat, item.retpat],
       
        
     
      
      }));

    //  const seriesData1 = Datachart();
     
      const srdata=  Datachart( ).map((item)=>(
         {
           x:item.clinic_name,
           y:[item.new_pat,item.old_pat],
          
         }
       ));

  //     const [chartData, setChartData] = useState({
  //       labels: Datcahart.map((data) =>data.clinic_name), 
  //  //   console.log(seriesData);
   
  //   series:[
  //     {
  //       data:Datcahart.map((data) =>data.new_pat,data.old_pat),
  //     }
  //     ,

  //   ],
  //   options: {
  //     chart: {
  //       height: 300,
  //       width:300,
        
  //       type: 'rangeBar',
  //       zoom: {
  //         enabled:false,
  //       },
  //     },
  //     plotOptions: {
  //       bar: {
  //         isDumbbell: true,
  //         columnWidth: 3,
  //         dumbbellColors: [['#008FFB', '#00E396']],
  //       },
  //     },
  //     legend: {
  //       show: true,
  //       showForSingleSeries: true,
  //       position: 'top',
  //       horizontalAlign: 'center',
  //       customLegendItems: ['جديد', 'مراجعة','الاجمالي'],
  //     },
  //     fill: {
  //       type: 'gradient',
  //       gradient: {
  //         type: 'vertical',
  //         gradientToColors: ['#00E396'],
  //         inverseColors: true,
  //         stops: [0, 100],
  //       },
  //     },
  //     grid: {
  //       xaxis: {
  //         lines: {
  //           show: true,
  //         },
  //       },
  //       yaxis: {
  //         lines: {
  //           show: true,
  //         },
  //       },
  //     },
  //     xaxis: {
  //       tickPlacement: 'on',
  //     },
  //   },
  //     );
  const state = {
    series: [
      {
        data: srdata,
      },
     
    ],
    options: {
      chart: {
        height: 300,
        width:450,
        
        type: 'rangeBar',
        zoom: {
          enabled:false,
        },
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth:2,
          dumbbellColors: [['#008FFB', '#00E396']],
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'center',
        customLegendItems: ['جديد','مراجعة'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertial',
          gradientToColors: ['#00E396'],
          inverseColors: true,
          stops: [0, 100],
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        tickPlacement: 'on',
      },
    },
  };
 
  return (
    <>
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="rangeBar" height={260} />
    </div>
  <div>

  </div>
      
    
      
       
    </>
  );
  
};
export default Installment;
// const domContainer = document.querySelector('#app');
// ReactDOM.render(<ApexChart />, domContainer);

