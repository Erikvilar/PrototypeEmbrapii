import css from "./ToolsDev.module.css";
import Modals from "../../reactBootstrap/modals/modals";
import { useState } from "react";

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

  const url = "./src/data/teste.json";

  const submitForm = async (e) => {
    e.preventDefault();
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(devForm),
		headers: new Headers({
		  'Content-Type': 'application/json',
		  'Accept': 'application/json'
		}),
	  };
	await fetch(url, requestOptions);
	  
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
