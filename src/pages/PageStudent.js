import React, { useEffect, useState } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../apis/APIStudents';
import { CPStudentForm } from '../components/CPStudentForm';
import { CPStudentList } from '../components/CPStudentList';

export const PageStudent = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const studentsData = await getStudents();
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

    return (
        <div>
            <h1>Student Management</h1>
            <CPStudentForm student={editingStudent} onSubmit={handleAddOrUpdateStudent} onResetForm={handleResetForm} />
            <CPStudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};
