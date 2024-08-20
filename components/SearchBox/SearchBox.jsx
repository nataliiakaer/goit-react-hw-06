import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, showValueSearch }) => {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={showValueSearch} />
    </div>
  );
};

export default SearchBox;
