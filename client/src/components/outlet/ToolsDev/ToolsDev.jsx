import css from "./ToolsDev.module.css";
import Modals from "../../reactBootstrap/modals/modals";
import axios from "axios";
import { useState } from "react";

const ToolsDev = () => {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    produto: "",
    name: "",
    tipo: "",
    categoria: "",
    descricao: "",
    details: {
      descritivo: {
        Faixa_nominal: "",
        caracteristica: "",
      },
      detalhamento: {
        Faixa_nominal: "",
        Ensaio: "",
      },
    },
    content: {
      technical: [""],
      usability: [""],
    },
    image: [""],
  });

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.section) {
      // Atualiza campos aninhados em details
      setFormData((prevData) => ({
        ...prevData,
        details: {
          ...prevData.details,
          [dataset.section]: {
            ...prevData.details[dataset.section],
            [name]: value,
          },
        },
      }));
    } else if (dataset.type) {
      // Atualiza campos aninhados em content
      setFormData((prevData) => ({
        ...prevData,
        content: {
          ...prevData.content,
          [dataset.type]: [value], // Considerando que você está adicionando um único valor
        },
      }));
    } else {
      // Atualiza campos principais
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    try {
    await axios.post("http://localhost:5000/api/products/", formData); 
      alert("Produto criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar produto:", error); 
      alert("Erro ao criar produto.");
    }
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
            <form
              action=""
              className={css.devToolsForm}
              onSubmit={handleSubmit}
            >
              <h2>Preenchimento de dados modo desenvolvedor</h2>
          
              <input
                type="text"
                name="produto"
                placeholder="Produto"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Nome"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="tipo"
                placeholder="Tipo"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="categoria"
                placeholder="Categoria"
                onChange={handleChange}
                required
              />
              <textarea
                name="descricao"
                placeholder="Descrição"
                onChange={handleChange}
                required
              ></textarea>

              <h3>Detalhes Descritivos</h3>
              <input
                type="text"
                name="Faixa nominal"
                data-section="descritivo"
                placeholder="Faixa nominal"
                onChange={handleChange}
              />
              <input
                type="text"
                name="caracteristica"
                data-section="descritivo"
                placeholder="Característica"
                onChange={handleChange}
              />

              <h3>Detalhamento</h3>
              <input
                type="text"
                name="Faixa nominal"
                data-section="detalhamento"
                placeholder="Faixa nominal"
                onChange={handleChange}
              />
              <input
                type="text"
                name="Ensaio"
                data-section="detalhamento"
                placeholder="Ensaio"
                onChange={handleChange}
              />

              <h3>Conteúdo</h3>
              <input
                type="text"
                name="technical"
                data-type="technical"
                placeholder="Conteúdo Técnico"
                onChange={handleChange}
              />
              <input
                type="text"
                name="usability"
                data-type="usability"
                placeholder="Usabilidade"
                onChange={handleChange}
              />

              <h3>Imagens</h3>
              <input
                type="text"
                name="image"
                placeholder="URL da Imagem"
                onChange={handleChange}
              />

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
