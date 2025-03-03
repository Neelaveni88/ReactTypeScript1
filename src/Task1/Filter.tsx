import React from "react";

interface Props {
  setFilter: (filter: string) => void;
}

const Filter: React.FC<Props> = ({ setFilter }) => {
  return (
    <div className="Button">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Incomplete")}>Incomplete</button>
    </div>
  );
};

export default Filter;
