import instance from "./instance";

export const listPagi = (page) => {
    const url = `?page=${page}&results=10&seed=abc&exc=dob,gender,location,registered,phone,cell,nat`;
    return instance.get(url)
}