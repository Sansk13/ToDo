/* eslint-disable react/prop-types */
const Board = ({task, index, tasklist, setTasklist}) => {
  const handleDelete = () => {
    let removeIndex = tasklist.indexOf(task);
    tasklist.splice(removeIndex, 1);
    setTasklist((currentTasklist) =>
      currentTasklist.filter((todo) => todo !== task)
    );
  };
  return (
    <>
      <div className="max-w-xl flex flex-col items-center justify-center border">
        <p>{task}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Board;