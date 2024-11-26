import { updateTestResultVisibility } from "../api/testResults";

const TestResultItem = ({results, onUpdate, onDelete, currentUserId}) => {
    // const isOwnerResult = results.userId === currentUserId
    const { id, userId, nickname, result, description, createdAt, visibility } = results;
    const handleToggleVisibility = async () => {
        try {
          const updatedResult = await updateTestResultVisibility(id, !visibility);
          onUpdate(id, updatedResult); // 상태 갱신
        } catch (error) {
          console.error("Error toggling visibility:", error);
        }
      };
    

    console.log("second", results.userId)
    return (
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">{results.nickname}</h2>
          <p>{results.result}</p>
          <div>
            <p>{results.description}</p>
          </div>
          {results.userId === currentUserId && (
          <div className="flex justify-between mt-4">
            <button onClick={handleToggleVisibility} className="btn btn-primary">
              비공개
            </button>
            <button onClick={onDelete(results.id)} className="btn btn-danger">
              삭제
            </button>
          </div>
          )}
        </div>
      );
}

export default TestResultItem