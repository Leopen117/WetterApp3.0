"use client";
import ReactECharts from 'echarts-for-react';




interface DiagramProps{
  diagramData: (string | number)[][]
}

function Diagram({diagramData}:DiagramProps) {

  const hourlyTimeData: (string | number)[] = diagramData[0]
  const hourlyTemperatures: (string | number)[] = diagramData[1]
  let hoursArray: string[] = []

      
  for (let i = 0; i < 25; i++) {
    let date:string = hourlyTimeData[i].toString()
    date = date.slice(-5)
    hoursArray.push(date)

  
  }



    const options = {
      grid: { top: 45, right: 8, bottom: 24, left: 40 },
      title: {
        text: 'Temperature Change of the Day'
      },
      xAxis: {
        type: 'category',
        data: hoursArray,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: [
        {
          data: hourlyTemperatures,
          type: 'line',
          smooth: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
    };




  return (
  <div className='d-flex flex-column align-items-center m-5'> 
  
    <ReactECharts option={options} style={{width:1300, height:400}}/>

  </div>
  )
}
export default Diagram




