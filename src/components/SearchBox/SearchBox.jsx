import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { getValueFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getValueFilter);

  const showValueSearch = (event) => {
    const value = event.target.value;
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={showValueSearch} />
    </div>
  );
};

export default SearchBox;
