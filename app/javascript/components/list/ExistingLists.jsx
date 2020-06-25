import React from "react";
import List from "./List";

const ExistingLists = ({ lists }) => {
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((list) => (
        // TODO: add unique key
        <List {...list} key={list.id} />
      ))}
    </div>
  );
};

export default ExistingLists;
