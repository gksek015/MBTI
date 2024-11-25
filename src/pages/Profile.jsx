import  { useState } from "react";


const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              닉네임
            </label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;