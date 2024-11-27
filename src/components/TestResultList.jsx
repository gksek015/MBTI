import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, currentUserId, onUpdate, onDelete }) => {

  return (
    <div className="flex flex-col space-y-6 w-full max-w-3xl">
      {results.filter((result)=>{return result.visibility})
        .map((result) => (
          <TestResultItem
            key={result.id}
            results={result}
            currentUserId={currentUserId}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TestResultList;