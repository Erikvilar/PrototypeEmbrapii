import axios from "axios";
import { useState, useEffect } from "react";

export const UseFetchGet = (value) => {
  const [data, setData] = useState([]);
  const valueFormat = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  console.log(valueFormat);
  const url = "./src/data/dataJson.json";
  useEffect(() => {
    axios.get(url).then((res) => {
       console.log(res.data[1].descricao)
      const result = res.data.filter((item) =>
        item.tipo.includes (valueFormat) || item.descricao.normalize('NFD').includes(valueFormat) ||  item.produto.toLowerCase().startsWith(valueFormat) 
      );
      setData(result);
      
     
    });
  }, [value]);
  return { data };
};
