// BloodInventoryPage.js
import React, { useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #ff4c4c;
  color: white;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const BloodInventoryPage = () => {
  const [inventory, setInventory] = useState([
    { type: "A+", quantity: 20 },
    { type: "B+", quantity: 15 },
    { type: "O-", quantity: 5 },
    { type: "AB+", quantity: 10 },
  ]);

  return (
    <div>
      <h1>Blood Inventory</h1>
      <Table>
        <thead>
          <tr>
            <Th>Blood Type</Th>
            <Th>Quantity Available</Th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((bloodType, index) => (
            <tr key={index}>
              <Td>{bloodType.type}</Td>
              <Td>{bloodType.quantity}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BloodInventoryPage;
