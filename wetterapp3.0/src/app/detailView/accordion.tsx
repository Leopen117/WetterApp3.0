import * as echarts from 'echarts/core';
import ReactECharts from 'echarts-for-react';
import {
  BarChart,
  LineChart,
  
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // Dataset
  DatasetComponent,
  // Built-in transform (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type {
  // The series option types are defined with the SeriesOption suffix
  BarSeriesOption, 
  LineSeriesOption,
} from 'echarts/charts';
import type {
  // The component option types are defined with the ComponentOption suffix
  TitleComponentOption, 
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from 'echarts/components';
import type { 
  ComposeOption, 
} from 'echarts/core';
import Accordion from 'react-bootstrap/Accordion';
// Create an Option type with only the required components and charts via ComposeOption
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;
// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

interface DiagramProps{
  diagramData: (string | number)[][]
}

function DetailAccordion({diagramData}:DiagramProps){
  //Temperature Diagram
  const hourlyTimeData: (string | number)[] = diagramData[0]
  const hourlyTemperatures: (string | number)[] = diagramData[1]
  let hoursArray: string[] = []    
  for (let i = 0; i < 24; i++) {
    let date:string = hourlyTimeData[i].toString()
    date = date.slice(-5)
    hoursArray.push(date)
  }
  //Precipitation
  const totalPrecipitation = diagramData[2]
  const rain = diagramData[3]
  const showers = diagramData[4]
  const snow = (diagramData[5] as number[] ).map((i)=> i*10)

  const optionPrecipitation: ECOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Total', 'Rain', 'Showers', 'Snow']
    },
          xAxis: {
            type: 'category',
            data: hoursArray
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: "{value} mm"
            }
          },
          series: [
            {      name: 'Total',
              type: 'bar',
              barGap: 0,      
              emphasis: {
                focus: 'series'
              },
              data: totalPrecipitation
            },
            {
              name: 'Rain',
              type: 'bar',         
              emphasis: {
                focus: 'series'
              },
              data: rain
            },
            {
              name: 'Showers',
              type: 'bar',          
              emphasis: {
                focus: 'series'
              },
              data: showers
            },
            {
              name: 'Snow',
              type: 'bar',          
              emphasis: {
                focus: 'series'
              },
              data: snow 
            }          
          ],
        };
    
      console.log(' :',diagramData );
  //Wind_Speed
  const windSpeed_10m = diagramData[6]
  const windSpeed_80m = diagramData[7]
  const windSpeed_120m = diagramData[8]
  const windSpeed_180m = diagramData[9]
  const optionWindSpeed: ECOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['10m', '80m', '120m', '180m']
    },
          xAxis: {
            type: 'category',
            data: hoursArray
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: "{value} km/h"
            }
          },
          series: [
            {      name: '10m',
              type: 'bar',
              barGap: 0,      
              emphasis: {
                focus: 'series'
              },
              data: windSpeed_10m
            },
            {
              name: '80m',
              type: 'bar',         
              emphasis: {
                focus: 'series'
              },
              data: windSpeed_80m
            },
            {
              name: '120m',
              type: 'bar',          
              emphasis: {
                focus: 'series'
              },
              data: windSpeed_120m
            },
            {
              name: '180m',
              type: 'bar',          
              emphasis: {
                focus: 'series'
              },
              data: windSpeed_180m 
            }          
          ],
        };
    return (

    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Precipitation</strong></Accordion.Header>
        <Accordion.Body>
        <ReactECharts option={optionPrecipitation} style={{width:1300, height:400}}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Wind</strong></Accordion.Header>
        <Accordion.Body>
        <ReactECharts option={optionWindSpeed} style={{width:1300, height:400}}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
}
export default DetailAccordion