
const TestResultItem = ({results, onUpdate, onDelete, currentUserId}) => {
    const { id, visibility } = results;

    return (
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
          <h2 className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3 text-xl font-semibold">{results.nickname}</h2>
          <p className="text-2xl font-bold text-yellow-400 mb-4">{results.result}</p>
          <div>
            <p className="text-base text-gray-300 mb-4">{results.description}</p>
          </div>
          {results.userId === currentUserId && (
          <div className="flex justify-end space-x-4">
            <button onClick={() => onUpdate(id, visibility)} className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition">
              {visibility ? "비공개" : "공개"}
            </button>
            <button onClick={() => onDelete(results.id)} className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition">
              삭제
            </button>
          </div>
          )}
        </div>
      );
}

export default TestResultItem;