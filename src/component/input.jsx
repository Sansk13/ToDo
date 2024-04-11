/* eslint-disable react/prop-types */
import { useState } from "react";

const Input = ({tasklist,setTasklist}) => {
    const [input, setInput] =useState("");

    const handleAddTask = (e) => { 
     e.preventDefault();
     setTasklist([...tasklist, input]);
     setInput("");
    };
  return (
    <>
   <form className="flex flex-row items-center  gap-3">
    <input
    className="border-2 border-gray-300 p-2 rounded-lg"
     type="text" placeholder="Add A Task"
    value={input}
    onChange = {(e)=>(setInput(e.target.value))}  
     />
    <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleAddTask}>Add</button>
   </form>
    </>
  );
}

export default Input