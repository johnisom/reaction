import React from "react";
import ExistingListsContainer from "./ExistingListsContainer";
import AddListContainer from "./AddListContainer";

const ListContainer = ({ boardId }) => {
  return (
    <div id="list-container" className="list-container">
      <ExistingListsContainer boardId={boardId} />
      <AddListContainer />
    </div>
  );
};

export default ListContainer;
