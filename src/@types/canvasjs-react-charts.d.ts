
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
  const CanvasJSReact: {
    CanvasJSChart: React.ComponentType<any>;
  };
  export default CanvasJSReact;
}