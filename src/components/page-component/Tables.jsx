
import React, { useState, useEffect } from "react";
function Tables() {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');
  const [click, setClick] = useState('');
  const [error, setError] = useState(null);
  const [fetchDone, setFetchDone] = useState(false);


  const handleInputChange = (event) => {
    setInput(event.target.value);
    setFetchDone(false)
  };
  console.log(click)
  const handleClick = (event) => {
    setClick(event.target.value);
    setFetchDone(false)
  };
  useEffect(() => {
    if (!fetchDone) {
      const fetchReturnTotal = async () => {
        try {
          let url = '';
          if(!click){
            url = `http://localhost:3308/product/return`;
          }else{
            url = `http://localhost:3308/product/return-${click}/${input}`
          }
          const response = await fetch(url); 
          const result = await response.json();
          console.log(result)
         
          setData(result);
          setFetchDone(true);
        } catch (error) {
      
        }
      };
      fetchReturnTotal();
  
    };
  }, [input,fetchDone]);
  const styleHolder =(color)=>{
    color:color;
  };
  return (

    <div className="content">
      <form  className="search-bar">
       <label htmlFor="search">Procurar por itens</label>
        <input type="text" name="search" id="search" value={input} placeholder={`Buscando por: ${click}`} onChange={handleInputChange} maxLength={12}/>
      </form>
      <div className="tables">
{Array.isArray(data) ?(
        <table>
          <thead>
            <tr>
            <td><button value="identificador" onClick={handleClick}>ID do produto</button></td>
            <td><button value="nome" onClick={handleClick}>Nome do produto</button></td>
            <td><button value="codigo" onClick={handleClick}>Codigo do produto</button></td>
            <td><button value="tipo" onClick={handleClick}>Tipo do produto</button></td>
            <td><button value="condicao" onClick={handleClick}>condição do produto</button></td>
              <td>Descrição</td>
              <td><button value="existencia" onClick={handleClick}>existencia</button></td>
              <td>Image</td>
              <td>Criado em</td>
              <td>Atualizado em</td>
            </tr>
          </thead>

          <tbody>
      
            {data.map((item, index) =>  (
         
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name_item}</td>
                <td>{item.code_item}</td>
                <td>{item.type_item}</td>
                <td>{item.condition_item}</td>
                <td>
              <details> 
                <summary>
               continuar lendo
                </summary>
                <span>{item.description_item}</span>
              </details>
                </td>
                <td>{item.exists_item}</td>
                <td>{item.image_item}</td>
                <td>{item.created_item}</td>
                <td>{item.update_item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table>
             <thead>
             <tr>
            <td><button value="identificador" onClick={handleClick}>ID do produto</button></td>
            <td><button value="nome" onClick={handleClick}>Nome do produto</button></td>
            <td><button value="codigo" onClick={handleClick}>Codigo do produto</button></td>
            <td><button value="tipo" onClick={handleClick}>Tipo do produto</button></td>
            <td><button value="condicao" onClick={handleClick}>condição do produto</button></td>
              <td>Descrição</td>
              <td><button value="existencia" onClick={handleClick}>existencia</button></td>
              <td>Image</td>
              <td>Criado em</td>
              <td>Atualizado em</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{data.id}</td>
                <td>{data.name_item}</td>
                <td>{data.code_item}</td>
                <td>{data.type_item}</td>
                <td>{data.condition_item}</td>
                <td>
              <details> 
                <summary>
           <span>Ver descrição</span>
                </summary>
                <span>{data.description_item}</span>
              </details>
                </td>
                <td>{data.exists_item}</td>
                <td>{data.image_item}</td>
                <td>{data.created_item}</td>
                <td>{data.update_item}</td>
              </tr>
          </tbody>
        </table>
      
      )}
    </div>
    </div>
  );
}

export default Tables;