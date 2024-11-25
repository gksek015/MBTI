import API from "./api";


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
        const {userId, nickname, accessToken} = response.data
        localStorage.setItem("user", JSON.stringify({userId, nickname}))
        localStorage.setItem("token", accessToken)
        return {userId, nickname, token: accessToken};
    } catch (error) {
        console.log("Login failed: ", error.response?.data || error.message);
        throw error;
    }
};

export const getUserProfile = async () => {
    try{
        const response = await API.get("/user");
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
};

export const updateProfile = async (nickname) => {
    try {
        const formData = new FormData();
        formData.set("nickname", nickname);

        const response = await API.patch("/profile", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        return response.data;
    } catch (error) {
        console.error(error);
    }
};