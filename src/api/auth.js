import axios from "axios";

const API = axios.create({
    baseURL: 'https://moneyfulpublicpolicy.co.kr',
    headers: {
        "Content-Type": "application/json",
    }
})
 

export const register = async (userid, password, nickname) => {
    try {
        const response = await API.post("/register", {
    id: userid,
    password,
    nickname,
  });
  return response.data;
    } catch(error) {
        console.error(
            "Registration failed:",
            error.response?.data || error.message
        );
        throw error;
    }
  
} 

export const login = async (userid, password) => {
    try {
        const response = await API.post("/login", {
            id: userid,
            password,
        });
        const {userId, nickname} = response.data
        localStorage.setItem("user", JSON.stringify({userId, nickname}))
        return {userId, nickname};
    } catch (error) {
        console.log("Login failed: ", error.response?.data || error.message);
        throw error;
    }
};

export const getUserProfile = async (token) => {

};

export const updateProfile = async (formData) => {

};