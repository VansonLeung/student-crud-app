import React, {useState, useEffect} from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const CPStudentSearchBar = ({ value, onChangeValue }) => {
    
    const [inputValue, setInputValue] = useState(value || ``);
    const [debouncedSearchTerm, applyDebouncedSearchTerm] = useDebounce(inputValue, 1000);

    // Debounce function to delay the search
    useEffect(() => {
        onChangeValue && onChangeValue(debouncedSearchTerm);
    }, [debouncedSearchTerm, onChangeValue]);


    const handleChange = (e) => {
        setInputValue(e.target.value);
    };


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            applyDebouncedSearchTerm();
        }}>
            <div style={{display: `flex`, alignItems: `center`, gap: 10,}}>
                <label>Search</label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Search students..."
                />
            </div>
        </form>
    );
};
