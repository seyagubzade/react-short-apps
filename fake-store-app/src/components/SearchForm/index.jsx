import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchForm = ({ searchValue, setSearchValue, handleSubmit }) => {

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <CustomizedForm>
            <form onSubmit={handleSubmit} sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                    id="searchInput"
                    label="Search"
                    variant="outlined"
                    size="small"
                    onChange={handleInputChange}
                    value={searchValue}
                />
                <Button type="submit" variant="contained" color="primary" >
                    Submit
                </Button>
            </form>
        </CustomizedForm>
    );
}

const CustomizedForm = styled('div')({
    display: "flex",
    margin: '60px auto',
    flexDirection: "row",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center"
});

export default SearchForm