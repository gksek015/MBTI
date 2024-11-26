import TestResultItem from "./TestResultItem";


const TestResultList = ({results, onHide, onDelete}) => {
    console.log("first", results)
    return (
        <div>
          {Array.isArray(results) && results.length > 0 ? (
            results.map((result) => (
              <TestResultItem
                key={result.id}
                results={result}
                onHide={() => onHide(result.id)}
                onDelete={() => onDelete(result.id)}
              />
            ))
          ) : (
            <p>테스트 결과가 없습니다.</p>
          )}
        </div>
      );
}

export default TestResultList