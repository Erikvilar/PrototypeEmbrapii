import css from "./ComponentNoticias.module.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import news from "./news";
import { Link } from "react-router-dom";
const ComponentSubNews = () => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const [next, setNext] = useState(true)
  console.log(filterData);

  const n = 4;

  useEffect(() => {
    setFilterData(
      news.SubNews.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
    console.log(page)
    setNext(page)
  }, [page]);

  return (
    <>
      <div className={css.pagination_page}>
        {filterData &&  filterData.map((n, index) => (
          <div className={css.ComponentSubNews} key={index}>
            
              <div className={css.ContentImages}>
                <img src={n.img} />
              </div>
              <div className={css.ContentInformations}>
              <Link to={n.link} key="index" target="_blank">
                <span>{n.type}</span>
                <h3>{n.title}</h3>
                <p>{n.date}</p>
                </Link>
              </div>
             
            </div>
         
          ))}
      </div>
      <ReactPaginate
        className={css.pagination_list}
        containerClassName={css.pagination}
        activeClassName={css.active}
        pageClassName={css.page_item}
        onPageChange={(event) => setPage(event.selected)}
        breakLabel="..."
        pageCount={Math.ceil(news.SubNews.length / n)}
        previousLabel={next == 0? null: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000"><path d="M384-96 0-480l384-384 68 68-316 316 316 316-68 68Z"/></svg>}
        nextLabel={next+1 ==  Math.ceil(news.SubNews.length / n) ? null : <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000"><path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z " /></svg>}
      />
    </>
  );
};
export default ComponentSubNews;
