import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function GantZoomChart() {

  let base = +new Date(2016, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let valueBase = Math.random() * 300;
  let valueBase2 = Math.random() * 50;
  let data_high = [];
  let data_low = [];
  for (var i = 1; i < 10; i++) {
    var now = new Date((base += oneDay));
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data_high.push([dayStr, valueBase]);
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data_low.push([dayStr, valueBase2]);
  }
  setTimeout(() => {
    console.table(data_high)
    console.table(data_low)
      
  }, 400);
  
  const option = {
    title: {
      left: 'center',
      text: 'Data Zoom Example'
    },
    legend: {
      top: 'bottom',
      data: ['Intention']
    },
    tooltip: {
      triggerOn: 'hover',
      position: function (pt) {
        return [pt[0], 130];
      }
    },
    toolbox: {
      left: 'center',
      itemSize: 25,
      top: 55,
      feature: {
        dataZoom: {          
          show: false
        },
        restore: {show: true}
      }
    },
    xAxis: {
      type: 'time',
      axisPointer: {
        value: '2016-10-7',
        snap: true,
        lineStyle: {
          color: '#7581BD',
          width: 2
        },
        label: {
          show: true,
          formatter: function (params) {
            return echarts.format.formatTime('yyyy-MM-dd', params.value);
          },
          backgroundColor: '#7581BD'
        },
        handle: {
          show: true,
          color: '#7581BD'
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        inside: true
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        inside: true,
        formatter: '{value}\n'
      },
      z: 10
    },
    grid: {
      top: 110,
      left: 15,
      right: 15,
      height: 160
    },
    dataZoom: [
      {
        type: 'inside',
        throttle: 50
      }
    ],
    
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
          color: '#0770FF'
        },
        
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(58,77,233,0.8)'
            },
            {
              offset: 1,
              color: 'rgba(58,77,233,0.3)'
            }
          ])
        },
        data: data_high
      },
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
                symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
           color: '#F2597F'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(213,72,120,0.8)'
            },
            {
              offset: 1,
              color: 'rgba(213,72,120,0.3)'
            }
          ])
        },
        data: data_low
      }
    ]
  };

  
  return (

    <ReactECharts
      option={option}
      style={{ height: 400 }}
      // opts={{ locale: 'FR' }}
    />

  )
}