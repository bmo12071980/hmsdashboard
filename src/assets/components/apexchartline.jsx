
import React from "react";
import ReactDOM from "react-dom/client";
import ReactApexChart from 'react-apexcharts';
export const  ApexChartline=()=> {
             
    const     series=[
           {
             name: "جديد ",
             data: [28, 29, 33, 36, 32, 32]
           },
           {
             name: "مراجع",
             data: [12, 11, 14, 18, 17, 13]
           }
         ];
         const options= {
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
           colors: ['#77B6EA', '#545454'],
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
             categories: ['القلب', 'الاسنان', 'النساءوالولادة', 'المخ والاعصاب', 'الطواريء','الانف والاذن والحنجرة'],
             title: {
               text: 'العيادات الخارجية'
             }
           },
           yaxis: {
            categories:['يناير','فبراير','مارس'],
             title: {
               text: 'الاشهر'
             },
             min:5,
             max:40,
             
           },
           legend: {
             position: 'top',
             horizontalAlign: 'right',
             floating: true,
             offsetY: -25,
             offsetX: -5
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
 
