import axios from "axios";
import { useState, useEffect } from "react";

export const UseFetchGet = (value) => {
  const [data, setData] = useState([]);
  const valueFormat = value;
  const url = "http://localhost:5000/api/products/";
  console.log(valueFormat);
  useEffect(() => {
    axios.get(url).then((res) => {
      const result = res.data.filter((item) => {
        console.log(item.tipo.includes(valueFormat));
        return (
          item.tipo.includes(valueFormat) ||
          item.descricao.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(valueFormat) ||
          item.descricao.includes(valueFormat) ||
          item.produto.includes(valueFormat.toLowerCase())
        );
      });
      

      setData(result);
    });
  }, [value]);
  return { data };
};
