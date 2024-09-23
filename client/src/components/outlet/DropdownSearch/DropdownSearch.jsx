import css from "./DropdownSearch.module.css";
const dropdownSearch = ({list, title}) => {
  return (
    <div className={css.listchoice}>
      <div className={css.listchoicetitle}>{title}</div>
      <div className={css.listchoiceobjects}>
     {list}
      </div>
    </div>
  );
};
export default dropdownSearch;
