import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchGet = ({ value }) => {
  const [data, setData] = useState([]);
  const valueFormat = value.toLowerCase();
  const url = "./src/data/dataJson.json";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const result = res.data.filter(
          (item) =>
            item.info.includes(valueFormat) ||
            item.tipo.includes(valueFormat) ||
            item.produto.startsWith(valueFormat)
        );
        setData(result);
      });
  }, [value]);
  return { data };
};
