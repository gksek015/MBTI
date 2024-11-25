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
            return;
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
    <div className="mt-16 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-primary-color mb-6">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="nickname" className="block text-lg font-medium text-gray-700 mb-2">
              닉네임
            </label>
            <input
            type="text" id="nickname" value={nickname} onChange={handleNicknameChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-primary-color"
            />
          </div>
          <button
          type="submit"
          className="w-full py-3 bg-primary-color font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-color transition duration-300"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Profile;