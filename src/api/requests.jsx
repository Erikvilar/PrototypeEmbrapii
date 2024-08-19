import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchGet = ({ value }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const valueFormat = value.toLowerCase();
  const url = "./src/data/dataJson.json";
  useEffect(() => {
   
    axios
      .get(url)
    
      .then((res) => {
        setError(false);
       const result = res.data.filter((item) =>
            
          item.info.includes(valueFormat) || item.tipo.includes(valueFormat) || item.produto.startsWith(valueFormat)
        
        );
  
        {setData(result) ? console.log("ok") : setError(error)}
      })

      .catch((error) => {
        setError(true);
      });
  }, [value]);
  return { data, error,  };
};
