import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <input
      placeholder="Cortas cebollitas"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        /* console.log("Lorem ipsum d");
        console.log(event);
        console.log(event.target.value); */
      }}
    />
  );
}
export { TodoSearch };
