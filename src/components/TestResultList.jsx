import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, currentUserId, setResults, onDelete }) => {

  const handleUpdate = (id, updatedResult) => {
    if (updatedResult === null) {
      // 삭제된 결과 제거
      console.log("입장")
      setResults((prevResults) =>
        prevResults.filter((result) => result.id !== id)
      );
    } else {
      // 상태 갱신
      setResults((prevResults) =>
        prevResults.map((result) => (result.id === id ? updatedResult : result))
      );
    }
  };

  return (
    <div className="flex flex-col space-y-6 w-full max-w-3xl">
      {results
        .map((result) => (
          <TestResultItem
            key={result.id}
            results={result}
            currentUserId={currentUserId}
            onUpdate={handleUpdate}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TestResultList;