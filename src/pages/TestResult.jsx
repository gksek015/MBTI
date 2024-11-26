import { useState, useEffect } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const TestResult = () => {
  const [results, setResults] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

useEffect(() => {
  const fetchTestResults = async () => {
    try {
      const response = await getTestResults();
      setResults(response)
    } catch (error) {
      console.error(error)
    }
  };
  fetchTestResults();
}, [])


const handleDelete = (id) => {
  const updatedResults = results.filter((result) => result.id !== id);
  setResults(updatedResults);
  toast.success("삭제되었습니다.")
}

  return (
    <>
    <Navbar/>
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">모든 테스트 결과</h1>
      <div>
            <TestResultList
              results={results}
              setResults={setResults}
              onDelete={handleDelete}
              currentUserId={user?.userId}
            />
      </div>
    </div>
    </>
  );
};

export default TestResult;
