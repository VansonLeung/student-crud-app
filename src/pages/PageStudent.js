import React, { useEffect, useState } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../apis/APIStudents';
import { CPStudentForm } from '../components/CPStudentForm';
import { CPStudentList } from '../components/CPStudentList';
import { CPStudentSearchBar } from '../components/CPStudentSearchBar';

export const PageStudent = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [searchKeywords, setSearchKeywords] = useState(``);

    const fetchStudents = async () => {
        const studentsData = await getStudents({searchKeywords: searchKeywords});
        setStudents(studentsData);
    };

    const handleAddOrUpdateStudent = async (student) => {
        if (editingStudent) {
            await updateStudent(editingStudent.id, student);
        } else {
            await createStudent(student);
        }
        fetchStudents();
        setEditingStudent(null);
    };

    const handleEdit = (student) => {
        setEditingStudent(student);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };

    const handleResetForm = () => {
        setEditingStudent(null);
    };

    const handleSearchKeywordsChangeValue = (keywords) => {
        setSearchKeywords(keywords);
    }



    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        fetchStudents();
    }, [searchKeywords]);



    return (
        <div>
            <h1>Student Management</h1>
            <CPStudentForm student={editingStudent} onSubmit={handleAddOrUpdateStudent} onResetForm={handleResetForm} />
            <br/>
            <CPStudentSearchBar value={searchKeywords} onChangeValue={handleSearchKeywordsChangeValue} />
            <CPStudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};
