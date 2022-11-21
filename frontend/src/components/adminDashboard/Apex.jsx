import React,{useState} from 'react';
import ReactApexChart from 'react-apexcharts';

function Apex() {
    const [state, setState] = useState({
        series: [{
            name: "financial",
            data: [0,5000, 10000, 15000, 2000, 25000,21000,35000, 40000]
        }],
        options: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Earning Overview',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              },
        }
    });
  return(
      <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
        width={620}
       />
      </div>
  );
}
export default Apex;