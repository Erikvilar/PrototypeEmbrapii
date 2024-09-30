import css from "./ToolsDev.module.css";
import Modals from "../../reactBootstrap/modals/modals";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ToolsDev = () => {
  const [modalShow, setModalShow] = useState(false);
  const [devForm, setDevForm] = useState({
    produto: "",
    categoria: "",
    image: "",
    descricao: "",
  });
  const formsSubmit = (e) => {
    setDevForm({ ...devForm, [e.target.name]: [e.target.value] });
  };

  const url = "http://10.2.128.20:5000/";

  const submitForm = (e) => {
    e.preventDefault();
    useEffect(() => {
      axios.get(url).then((res) => {
        console.log(res.data);
      });
    }, []);
  };

  return (
    <div>
      <button className={css.devTools} onClick={() => setModalShow(true)}>
        Tools+
      </button>
      <Modals
        show={modalShow}
        title="Preenchimento de dados - Desenvolvedor"
        subtitle="TRL - Technology Readiness Level"
        modal={
          <div>
            <form action="" className={css.devToolsForm} onSubmit={submitForm}>
              <h2>Preenchimento de dados modo desenvolvedor</h2>
              <label htmlFor="">Produto</label>
              <input type="text" name="produto" onChange={formsSubmit} />
              <label htmlFor="">Categoria</label>
              <input type="text" name="categoria" onChange={formsSubmit} />
              <label htmlFor="">Caminho da imagem</label>
              <input type="text" name="image" onChange={formsSubmit} />
              <label htmlFor="">Descricao</label>
              <textarea type="text" name="descricao" onChange={formsSubmit} />
              <input type="submit" value="Enviar" />
            </form>
          </div>
        }
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default ToolsDev;
