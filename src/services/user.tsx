import { ApiServiceAuthor, axiosApi } from "../http-common";

const registerUser = (data: any) => {
  return axiosApi.post("/user/register", data);
};

const getUser = (id:any) => {
  return ApiServiceAuthor.get(`/user/${id}`);
};

const updateUser = (data: any) => {
  return ApiServiceAuthor.put("/users/update", data);
};

const userService = {
  registerUser,
  getUser,
  updateUser,
};
export default userService;
