import React from "react";

interface Props {
  setFilter: (filter: string) => void;
}

const Filter: React.FC<Props> = ({ setFilter }) => {
  return (
    <div>
      <button style={{backgroundColor:"blue",color:"white",marginTop:"10px" }}onClick={() => setFilter("All")}>All</button>
      <button style={{backgroundColor:"blue",color:"white",marginTop:"10px",marginLeft:"5px" }} onClick={() => setFilter("Completed")}>Completed</button>
      <button style={{backgroundColor:"blue",color:"white",marginTop:"10px",marginLeft:"5px" }}onClick={() => setFilter("Incomplete")}>Incomplete</button>
    </div>
  );
};

export default Filter;
