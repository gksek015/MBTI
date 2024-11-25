import  { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { getUserProfile, updateProfile } from "../api/auth";
import { toast } from "react-toastify";


const Profile = () => {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
        try {
            const profile = await getUserProfile();
            console.log(profile)
            setNickname(profile.nickname);
        } catch (error) {
            console.error(error)
        }
    }
    fetchProfile();
  }, [])

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if(!user) {
            toast.error("로그인이 필요합니다.")
        }
        const updatedProfile = await updateProfile(nickname);

        const updatedUser = {...user, nickname: updatedProfile.nickname}
        localStorage.setItem("user", JSON.stringify(updatedUser))
        toast.success("업데이트에 성공했습니다.")
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <>
    <Navbar/>
    <div className="mt-16">
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              닉네임
            </label>
            <input type="text" id="nickname" value={nickname} onChange={handleNicknameChange} />
          </div>
          <button type="submit">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Profile;