


import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import "./style.css"

export const CanvasJSChartInicio = ()=> {	
      const options = {
        theme:"light1",
        legend:{
            maxWidth: 100,
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
      }
        

          
      return (
        <div className="canvasJSChart">
            <h1>Fonte de recursos para projetos de P&D</h1>
          <CanvasJSChart options = {options}
          />
          </div>
      );
    
}


export const CanvasJSChartVantagens = ()=> {	
  const options = {
  width:262,
  height:180,
    theme:"light2",
    legend:{
      maxWidth: 100,
  itemWidth: 180
    },
    data: [{				
      type: "pie",
      startAngle: 270,
      toolTipContent: "<b>{label}</b> {y}",
      showInLegend: true,
      legendText: "{label}",
      indexLabelFontSize: 14,
      indexLabel: "{label} ",
      dataPoints: [
        {y:2/3,  label: "Embrapii" },
        {y:1/3,  label: "Empresas"  },
  
   
      ]
    }]
  }
      
  return (
    <div className="ChartVantagens" >
      <CanvasJSChart options = {options} />
      </div>
     
  );
}
