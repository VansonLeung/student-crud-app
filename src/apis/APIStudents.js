import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL || ``}/students`;

export const getStudents = async ({searchKeywords}) => {
    const response = await axios.get(`${API_URL}?${searchKeywords ? `searchKeywords=${searchKeywords}` : ``}`);
    return response.data.content || [];
};

export const createStudent = async (student) => {
    await axios.post(API_URL, student);
};

export const updateStudent = async (id, student) => {
    await axios.put(`${API_URL}/${id}`, student);
};

export const deleteStudent = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
