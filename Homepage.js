// HomePage.js
import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background-color: #ff4c4c;
  color: white;
  text-align: center;
  padding: 50px 20px;
`;

const StatSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 30px;
`;

const StatCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
`;

const StatTitle = styled.h2`
  margin-bottom: 10px;
`;

const HeroButton = styled.button`
  background-color: white;
  color: #ff4c4c;
  margin-top: 20px;
  padding: 15px 30px;
  border-radius: 5px;
`;

function HomePage() {
  return (
    <div>
      <HeroSection>
        <h1>Welcome to BloodBridge</h1>
        <p>Your lifeline in times of need. Donate and save lives today.</p>
        <HeroButton>Donate Now</HeroButton>
      </HeroSection>

      <StatSection>
        <StatCard>
          <StatTitle>Donors</StatTitle>
          <p>1,500+</p>
        </StatCard>
        <StatCard>
          <StatTitle>Blood Units</StatTitle>
          <p>2,000+</p>
        </StatCard>
        <StatCard>
          <StatTitle>Lives Saved</StatTitle>
          <p>10,000+</p>
        </StatCard>
      </StatSection>
    </div>
  );
}

export default HomePage;
