import ReactPaginate from "react-paginate";
import scss from "./ComponentProjetos.module.scss";
import projects from "./projects";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BoxProjetos = () => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const [next, setNext] = useState(true);
  console.log(filterData);

  const n = 3;
  useEffect(() => {
    setFilterData(
      projects.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
    console.log(page);
    setNext(page);
  }, [page]);

  const navigate = useNavigate();
  const Redirect = (e) => {
    const value = e.target.value;
    sessionStorage.setItem("Projetos", JSON.stringify(Number(value)));
    navigate("/paginaProjeto");
  };

  return (
    <section className={scss.BoxProjects}>
      {filterData ? filterData.map((p) => (
          <div key={p.id} className={scss.ProjectsBox}>
            <div>
              <img src={p.img} alt="" width={100} height={100} />
            </div>
            <div className={scss.ProjectsTitle}>
              <h1>{p.titulo}</h1>
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#2c66ce"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                  Coordenador: Prof Louriel
                </p>
                <button value={p.id} onClick={Redirect}>
                  Confira mais +
                </button>
              </div>
            </div>
          </div>
        )):(
        <h1>Ocorreu um erro</h1>
        )}
      <ReactPaginate
        className={scss.pagination_list}
        containerClassName={scss.pagination}
        activeClassName={scss.active}
        pageClassName={scss.page_item}
        onPageChange={(event) => setPage(event.selected)}
        breakLabel={<a href="">Veja mais</a>}
        marginPagesDisplayed={0}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(projects.length / n)}
        previousLabel={
          next == 0 ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#000000"
            >
              <path d="M384-96 0-480l384-384 68 68-316 316 316 316-68 68Z" />
            </svg>
          )
        }
        nextLabel={
          next + 1 == Math.ceil(projects.length / n) ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#000000"
            >
              <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z " />
            </svg>
          )
        }
      />
    </section>
  );
};
export default BoxProjetos;
