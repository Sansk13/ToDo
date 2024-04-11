import { useState } from "react";
import Input from "./component/input";
import Board from "./component/Board";

function App() {
  const [tasklist, setTasklist] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-semibold">To Do Board</h1>
        <Input tasklist={tasklist} setTasklist={setTasklist} />
        <div className="grid grid-cols-3">
          {tasklist.map((task, index) => (
            <Board
              key={index}
              index={index}
              task={task}
              tasklist={tasklist}
              setTasklist={setTasklist}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
