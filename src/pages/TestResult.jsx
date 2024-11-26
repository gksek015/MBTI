import { useState, useEffect } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";
import { toast } from "react-toastify";

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

const handleHide = (id) => {
  const updatedResults = results.map((result) =>
    result.id === id ? {...result, visibility: false} : result
  );
  setResults(updatedResults);
  toast.success(`${id}가 비공개 처리되었습니다.`);
}

const handleDelete = (id) => {
  const updatedResults = results.filter((result) => result.id !== id);
  setResults(updatedResults);
  toast.success(`${id}가 삭제되었습니다.`)
}

console.log("result => ", results)

const filteredResults = Array.isArray(results)
? results.filter((result) => result.visibility === true)
: [];
console.log("filter => ", filteredResults)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">모든 테스트 결과</h1>

      <div>
            <TestResultList
              results={filteredResults}
              onHide={handleHide}
              onDelete={handleDelete}
            />
      </div>
    </div>
  );
};

export default TestResult;
