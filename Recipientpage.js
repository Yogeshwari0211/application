// RecipientPage.js
import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff4c4c;
  color: white;
  border-radius: 5px;
`;

function RecipientPage() {
  return (
    <div>
      <h1>Find Nearby Blood Banks</h1>
      <SearchForm>
        <Input type="text" placeholder="Enter your location" required />
        <Button type="submit">Search</Button>
      </SearchForm>
    </div>
  );
}

export default RecipientPage;
