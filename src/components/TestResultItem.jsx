
const TestResultItem = ({results, onUpdate, onDelete}) => {
    console.log("second", results)
    return (
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">{results.id}</h2>
          <p>{results.result}</p>
          <div className="flex justify-between mt-4">
            <button onClick={onUpdate} className="btn btn-primary">
              업데이트
            </button>
            <button onClick={onDelete} className="btn btn-danger">
              삭제
            </button>
          </div>
        </div>
      );
}

export default TestResultItem