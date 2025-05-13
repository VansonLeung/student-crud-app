import React from 'react';

export const CPStudentList = ({ students, onEdit, onDelete }) => {
    return (
        <ul>
            {students.map((s) => (
                <li key={s.id}>
                    {s.name} - {s.email} - {s.age}
                    <button onClick={() => onEdit(s)}>Edit</button>
                    <button onClick={() => onDelete(s.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
