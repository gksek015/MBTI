import TestResultItem from "./TestResultItem";


const TestResultList = ({results, onUpdate, onDelete}) => {
    console.log("first", results)
    return (
        <div>
          {Array.isArray(results) && results.length > 0 ? (
            results.map((result) => (
              <TestResultItem
                key={result.id}
                results={result} // 단일 결과 전달
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))
          ) : (
            <p>테스트 결과가 없습니다.</p>
          )}
        </div>
      );
}

export default TestResultList