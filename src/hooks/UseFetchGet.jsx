import axios from "axios";
import { useState, useEffect } from "react";

export const UseFetchGet = ({ value }) => {
  const [data, setData] = useState([]);
  const valueFormat = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  console.log(valueFormat)
  const url = "./src/data/dataJson.json";
  useEffect(() => {
    axios.get(url).then((res) => {
      const result = res.data.filter((item) =>
        item.tipo.includes (valueFormat) || item.produto.startsWith(valueFormat) || item.info.includes(valueFormat)
      );
      setData(result);
     
    });
  }, [value]);
  return { data };
};
