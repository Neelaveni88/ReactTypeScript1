import React, { useState } from 'react'

interface props {
    addToDo :(text:string) =>void;
}

const TodoForm: React.FC<props> = ({ addToDo }) => {
    const [text, setText] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!text.trim()) return;
      addToDo(text);
      setText("");
    };
  
    return (
      <form  onSubmit={handleSubmit}>
        <input style={{padding:"10px",borderRadius:"5px"}}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button style={{backgroundColor:"blue",color:"white",marginLeft:"10px"}} type="submit">Add</button>
      </form>
    );
  };
export default TodoForm