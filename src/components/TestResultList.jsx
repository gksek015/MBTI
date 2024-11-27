import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, currentUserId, onUpdate, onDelete }) => {
  console.log(results,currentUserId)
  return (
    <div className="flex flex-col space-y-6 w-full max-w-3xl">
      {results.filter((result)=> {return currentUserId === result.userId || result.visibility === true})
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