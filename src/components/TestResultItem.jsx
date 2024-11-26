
const TestResultItem = ({results, onHide, onDelete}) => {
    console.log("second", results)
    return (
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">{results.nickname}</h2>
          <p>{results.result}</p>
          <div>
            <p>{results.description}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={onHide} className="btn btn-primary">
              비공개
            </button>
            <button onClick={onDelete} className="btn btn-danger">
              삭제
            </button>
          </div>
        </div>
      );
}

export default TestResultItem