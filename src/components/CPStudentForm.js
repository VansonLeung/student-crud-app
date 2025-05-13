import React, { useState, useEffect } from 'react';

export const CPStudentForm = ({ student, onSubmit, onResetForm }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (student) {
            setFormData(student);
        } else {
            setFormData({});
        }
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit && await onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name || ``}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email || ``}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="number"
                name="age"
                value={formData.age || ``}
                onChange={handleChange}
                placeholder="Age"
            />
            <button type="submit">{student ? 'Update' : 'Add'} Student</button>
            
            {
                student && (
                    <button onClick={(e) => { onResetForm && onResetForm(e); }}>Cancel</button>
                )
            }

            </form>
    );
};
