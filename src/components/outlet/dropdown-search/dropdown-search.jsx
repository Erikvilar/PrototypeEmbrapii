import css from "./dropdown-search.module.css";
const dropdownSearch = ({list}) => {
  return (
    <div className={css.listchoice}>
      <div className={css.listchoicetitle}>Categorias</div>
      <div className={css.listchoiceobjects}>
     {list}
      </div>
    </div>
  );
};
export default dropdownSearch;
