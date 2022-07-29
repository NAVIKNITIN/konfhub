import React, { useState } from "react";

const Search = ({ FetchData,setText , text}) => {
    const [input, setInput] = useState("");

  const handleLoadMore = (e) => {
    setInput(e.target.value);
    setText(e.target.value);
    let data = {
      limit: 10,
      search_query: e.target.value,
      past_events:true
    };
    FetchData(data);
  };
  return (
    <div className="justify-content-center col-md-8">
      <h3 className="mt-2">Search</h3>
      <input
        type="search"
        placeholder="enter to search"
        className="form-control m-4 p-2"
        name="searchvideo"
        value={input}
        onChange={(e) => handleLoadMore(e)}
      ></input>
    </div>
  );
};

export default Search;
