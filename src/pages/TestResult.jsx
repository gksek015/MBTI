import { useState, useEffect } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";

const TestResult = () => {
  const [results, setResults] = useState([]);




useEffect(() => {
  const fetchTestResults = async () => {
    try {
      const response = await getTestResults();
      console.log(response)
      setResults(response)
    } catch (error) {
      console.error(error)
    }
  };

  fetchTestResults();
}, [])

const handleUpdate = () => {

}

const handleDelete = () => {

}

console.log("result => ", results)

const filteredResults = Array.isArray(results)
? results.filter((result) => result.visibility === true)
: [];
console.log("filter => ", filteredResults)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">내 테스트 결과</h1>

      <div>
        {filteredResults.length > 0 ? (
          filteredResults.map((result) => (
            <TestResultList
              key={result.id}
              results={result}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>현재 테스트 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default TestResult;
