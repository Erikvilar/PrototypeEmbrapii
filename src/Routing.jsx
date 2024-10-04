import App from "./App.jsx";
import {
  HashRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import {
  Inicio,
  ComponentInstitucional,
  ComponentEquipe,
  ComponentParcerias,
  ComponentVantagens,
  ComponentProjetos,
  ComponentNoticias,
  Infraestrutura,
  DynamicComponent,
  ProjectsPage,
  ComponentLaboratorio,
  ComponentPublicacoes
} from "./components/index.js";


const Routing = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Inicio />} />
          <Route path="institucional" element={<ComponentInstitucional />} />
          <Route path="equipe" element={<ComponentEquipe />} />
          <Route path="parceiros" element={<ComponentParcerias />} />
          <Route path="sejaparceiro" element={<ComponentVantagens />} />
          <Route path="infraestrutura" element={<Infraestrutura />} />
          <Route path="projetos" element={<ComponentProjetos />} />
          <Route path="/equipamentos" element={<DynamicComponent/>} />
          <Route path="/projetos/pagina" element={<ProjectsPage/>} />
          <Route path="noticias" element={<ComponentNoticias />} />
          <Route path="publicacoes" element={<ComponentPublicacoes/>} />
          <Route path="laboratorios" element={<ComponentLaboratorio/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default Routing;
