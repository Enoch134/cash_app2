import React,{useState} from 'react';
import ReactApexChart from 'react-apexcharts';

function  DoughnutChart() {
    const [state, setState] = useState({
        series: [44, 55, 13],
        
            options: {
              label:('one', 'two', 'three'),
              chart: {
                width: 380,
                type: 'donut',
                
              },
              dataLabels: {
                enabled: false,
               
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
              title: {
                text: 'Revenue Sources',
                align: 'left'
              },
              legend: {
                position: 'bottom',
                offsetY: 0,
                height: 80,
                
              }
            }
    });
  return(
      <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
       width={380}
       />
      </div>
  );
}
export default DoughnutChart;