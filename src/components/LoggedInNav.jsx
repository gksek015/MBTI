import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoggedInNav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        toast.success("로그아웃 되었습니다.");
        navigate("/login");
    }

  return (
    <>
      <Link
        to="/profile"
        className="text-gray-800 hover:text-red-600 font-semibold text-lg"
      >
        프로필
      </Link>
      <Link
        to="/test"
        className="text-gray-800 hover:text-red-600 font-semibold text-lg"
      >
        테스트
      </Link>
      <Link
        to="/result"
        className="text-gray-800 hover:text-red-600 font-semibold text-lg"
      >
        결과 보기
      </Link>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600"
      >
        로그아웃
      </button>
    </>
  )
}

export default LoggedInNav;