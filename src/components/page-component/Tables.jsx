
import React, { useState, useEffect } from "react";
function Tables() {

  const [data, setData] = useState(null);
  const [fetchDone, setFetchDone] = useState(false);
  useEffect(() => {
    if (!fetchDone) {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3308/product/return');
          const result = await response.json();
          console.log(result)
          setData(result);
          setFetchDone(true);
          console.log(result);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
      fetchData()

    };


  }, [fetchDone]);
  return (
    <div className="tables">
      {data ? (
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Produto</td>
              <td>Codigo</td>
              <td>Tipo</td>
              <td>Condição</td>
              <td>Descrição</td>
              <td>Existencia</td>
              <td>Image</td>
              <td>Criado em</td>
              <td>Atualizado em</td>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.code_item}>
                <td>{item.id}</td>
                <td>{item.name_item}</td>
                <td>{item.code_item}</td>
                <td>{item.type_item}</td>
                <td>{item.condition_item}</td>
                <td>{item.description_item}</td>
                <td>{item.exists_item}</td>
                <td>{item.image_item}</td>
                <td>{item.created_item}</td>
                <td>{item.update_item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading ..</p>
      )}
    </div>
  );
}

export default Tables;