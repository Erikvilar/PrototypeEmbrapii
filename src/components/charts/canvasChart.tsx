


import React, { Component } from "react"
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class CanvasJSChartInicio extends Component{	
 render(){
  const options =  {
    theme:"light1",
    width:712,
    height:400,
  
    legend:{
        maxWidth:100,
  itemWidth: 180
    },
    data: [{				
      type: "pie",
      startAngle: 270,
      toolTipContent: "<b>{label}</b> {y}%",
      showInLegend: true,
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        {y:52,  label: "Embrapii" },
        {y:45, label: "Óleo e Gàs"  },
        {y:3, label: "Outros" },
   
      ]
    }]
  };

      return (
        <div className="canvasJSChart">
           
  
          <CanvasJSChart options={options}/>
          </div>
      );
    }
    
  }


class CanvasJSChartVantagens extends Component{	
  render(){
   const options =  {
     theme:"light2",
     width:262,
     height:200,
     legend:{
         maxWidth:100,
   itemWidth: 180
     },
     data: [{				
       type: "pie",
       startAngle: 270,
       toolTipContent: "<b>{label}</b> {y}%",
       showInLegend: true,
       legendText: "{label}",
       indexLabelFontSize: 12,
     
       dataPoints: [
         {y:2/3,  label: "Embrapii" },
         {y:1/3, label: "Empresas"  },
    
       ]
     }]
   };
 
       return (
         <div className="canvasJSChart">
           <CanvasJSChart options={options}/>
           </div>
       );
     }
     
   }
   export {CanvasJSChartInicio, CanvasJSChartVantagens}