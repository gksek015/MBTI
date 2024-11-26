import { useState, useEffect } from "react";
import { deleteTestResult, getTestResults } from "../api/testResults";
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


const handleDelete = async (id) => {
  try {
    await deleteTestResult(id);

    setResults((prevResults) => {
      return prevResults.filter((result) => result.id !== id);
    });
    toast.success("삭제되었습니다.");
    
  } catch (error) {
    toast.error("삭제에 실패했습니다.");
    console.error("삭제 중 오류 발생:", error);
  }
};

const handleUpdate = (id, updatedResult) => {
  setResults((prevResults) =>
    prevResults.map((result) => (result.id === id ? updatedResult : result))
  );
};

  return (
    <>
    <Navbar/>
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">모든 테스트 결과</h1>
      <div>
            <TestResultList
              results={results}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              currentUserId={user?.userId}
            />
      </div>
    </div>
    </>
  );
};

export default TestResult;
