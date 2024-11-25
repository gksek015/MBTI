import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();


  const handleLogin = async (formData) => {
    try {
        const {nickname} = await login(formData.userid, formData.password);
        toast.success(`${nickname}님, 환영합니다!`);
        navigate("/");
    } catch (error) {
        console.error("로그인 실패: ", error.response?.data || error.message);
        toast.error("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;