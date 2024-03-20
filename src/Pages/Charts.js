import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts"

export function Charts({dataframe, width}) {

    const [widthScreen, setWidthScreen] = useState()

    useEffect(() => {
        if(width > 700){
            setWidthScreen(600)
        } else if(width > 660 && width <= 700){
            setWidthScreen(550)
        } else if( width > 400 &&  width <= 660){
            setWidthScreen(300)
        }else if(width <= 400){
            setWidthScreen(250)
        }
    })

    const options = {
      // responsive: [{
      //   breakpoint: 1000,
      //   options: {
      //     plotOptions: {
      //       bar: {
      //         horizontal: false
      //       }
      //     }
      //   }
      // }],
      // legend : {
      //     show : true,
      //     position: 'bottom',
      //     showForSingleSeries: true
      // },
      // title : {
      //     display : true,
      //     text : "Quantidade de Passos x Dia",
      //     style: {
      //         fontSize:  '18px',
      //         fontWeight:  'bold',
      //         align: 'center',
      //       },
      // },
      // plotOptions: {
      //   bar: {
      //     horizontal: true
      //   }
      // },
      // chart: {
      //   width: "100%",
      //   miHheight: 380,
      //   type: 'bar',
        // toolbar:{
        //   show : true,
        //     tools: {
        //       download: true,
        //       selection: true,
        //       zoom: false,
        //       zoomin: false,
        //       zoomout: false,
        //       pan: false,
        //       reset: false 
        //     }
        // },
      //     // type: 'line',
      //   background : "#fff"
      //   },
      //   xaxes : {
      //       categories : [1,2,3,4,5,6,7],
      //       label : 'Dias'
      //   },
      //   yaxes : {
      //       tooltip: true
      //   }
      chart: {
        width: "100%",
        height: 480,
        type: "line",
        toolbar:{
          show : true,
            tools: {
              download: true,
              selection: true,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false 
            },
      
        },
        background : "#22bc5466",
      },
      title : {
        display : true,
        text : "Quantidade de Passos x Dia",
        style: {
            fontSize:  '12px',
            fontWeight:  'bold',
            align: 'center',
          },
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
         style: {
          fontSize: '10px',
          fontWeight: 'bold',
        },
        background: {
          enabled: true,
          foreColor: '#000',
          borderRadius: 2,
          padding: 4,
          opacity: 0.9,
          borderWidth: 1,
          borderColor: '#00f'
        },
      },
      stroke: {
        width: 2,
        curve: 'smooth',
        colors: ["#000"]
      },
      xaxes : {
          categories : [1,2,3,4,5,6,7],
          label : 'Dias'
      },
      labels: ["dia 1", "dia 2", "dia 3", "dia 4", "dia 5", "dia 6", "dia 7"],
      yaxes : {
        tooltip: true
      },
      // legend: {
      //   position: "right",
      //   verticalAlign: "top",
      //   containerMargin: {
      //     left: 35,
      //     right: 60
      //   }
      // },
      legend : {
        show : true,
        position: 'bottom',
        fontSize: '12px',
        // color: '#0ff',
        showForSingleSeries: true,
        markers: {
          strokeColor: '#00f',
          width: 10,
          height: 10,
          strokeWidth: 20,
          radius: 10,
        },
        itemMargin: {
          horizontal: -1,
          vertical: 0
        }
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      markers: {
        size: 4,
        colors: "#fff",
        strokeColors: '#ff00ff55',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
    }
      }
    const series = [{
        name : 'Passos',
        data : dataframe
    }]

  return (
    <div>

      <ApexCharts
          options={options} 
          series={series}      
      />
    </div>
  )
}
