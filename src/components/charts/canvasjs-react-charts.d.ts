
/* ========================================================================== 
                      Configuração declare para Library ReactCharts
   ========================================================================== 
   * Autor: Erik Alves Vilar
   * Descriçao: arquivos .d.ts podem não ser reconhecidos diretamente pelo React nescessitando de uma configuração extra
   * Este arquivo visa remediar essa situação declarando o modulo do canvas explicitamente e o exportando como uma interface.
   * Ultima atualização: 11/08/2024
   */


/*declaração explicita do modulo */
declare module '@canvasjs/react-charts' {
    import { Component } from 'react';  //extraindo o Component do React.Component

    export interface CanvasJSChartProps { //exportando interface e passando props a serem usadas
      options:any;
      onRef?(ref: any): void;
    }
    export class CanvasJSChart extends Component<CanvasJSChartProps> { }
    export class CanvasJSStockChart extends Component<CanvasJSChartProps> { }
  }