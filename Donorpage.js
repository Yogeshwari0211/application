// DonorPage.js
import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

function DonorPage() {
  return (
    <div>
      <h1>Register as a Blood Donor</h1>
      <Form>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email Address" required />
        <Input type="date" required />
        <button type="submit">Schedule Donation</button>
      </Form>
    </div>
  );
}

export default DonorPage;
