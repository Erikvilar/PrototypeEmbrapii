/*
 *Autor: Erik Alves Vilar
 * Data 20-08
 * Refatorado: sim
 * Uso: Hook de requisição (GET) que busca dados no arquivo json e retorna array [] conforme valor solicitado
 */

import axios from "axios";
import { useState, useEffect } from "react";

export  const UseFetchGet = (value) => {
  const [data, setData] = useState([]);
  const valueFormat = value;
  const url = "./src/data/dataJson.json";
  useEffect(()=> {
    try{
    axios.get(url).then((res) => {
      const result  =  res.data.filter((item) => {
        
        /* 
        *Condição de retorno sendo filtrada e normalizada retirando acentuação, espaços em branco etc...
        */
        return (
          item.tipo.includes(valueFormat) ||
          item.descricao
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(valueFormat) ||
          item.descricao.includes(valueFormat) ||
          item.produto.includes(valueFormat.toLowerCase())
        );
      });
      /*
      *Estado de variavel setData sendo atualizado e retornando valor de array 
      */
     console.log(result)
      setData(result);
    });

  }catch(error){
    console.error("Request current error")
  }
  }, [value]);
  return { data };
};
