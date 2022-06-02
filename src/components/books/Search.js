export default function Search ({
  query,
  setQuery,
  setPageNumber
}) {

  const onChangeHandler = e => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <input
      style={{width: '100%'}}
      type='search'
      value={query}
      onChange={onChangeHandler}
    ></input>
  );
}
