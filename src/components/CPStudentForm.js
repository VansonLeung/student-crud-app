import React, { useState, useEffect } from 'react';

export const CPStudentForm = ({ student, onSubmit, resetForm }) => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '' });

    useEffect(() => {
        if (student) {
            setFormData(student);
        } else {
            setFormData({ name: '', email: '', age: '' });
        }
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                required
            />
            <button type="submit">{student ? 'Update' : 'Add'} Student</button>
        </form>
    );
};
