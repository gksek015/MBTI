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
    <Link to="/profile">프로필</Link>
    <Link to="/test">테스트</Link>
    <Link to="/test-result">결과보기</Link>
    <button onClick={handleLogout}>로그아웃</button>
    </>
  )
}

export default LoggedInNav;