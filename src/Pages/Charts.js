import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts"

export function Charts({dataframe, width}) {

    console.log(width);

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
        legend : {
            show : true,
            position: 'bottom',
            showForSingleSeries: true
        },
        title : {
            display : true,
            text : "Quantidade de Passos x Dia",
            style: {
                fontSize:  '18px',
                fontWeight:  'bold',
                align: 'center',
              },
        },
        chart: {
            
            width: "100%",
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
                  }
            },
                type: 'line',
                background : "#fff"
            },
        xaxes : {
            categories : [1,2,3,4,5,6,7],
            label : 'Dias'
        },
        yaxes : {
            tooltip: true
        }
    }
    const series = [{
        name : 'Passos',
        data : dataframe
    }]
    // {
        // data: [{
        //     x : 1,
        //     y : 2000
        // },{
        //     x : 2,
        //     y : 5000
        // },{
        //     x : 3,
        //     y : 1000
        // },{
        //     x : 4,
        //     y : 700
        // },{
        //     x : 5,
        //     y : 6000
        // },{
        //     x : 6,
        //     y : 12000
        // },{
        //     x : 7,
        //     y : 500
        // }
        // ]

    // }
  return (
    <div>
        {widthScreen && <ApexCharts
            options={options} 
            series={series} 
            width={widthScreen}
            
            
        /> }
        
    </div>
  )
}
