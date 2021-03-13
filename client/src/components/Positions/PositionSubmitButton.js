import React, { useState } from "react";
import { Modal } from "antd";
import LinkButton from "./LinkButton";
import styled from "styled-components";
import { mq, theme } from "constants/theme";
import { Column } from "react-virtualized";
const { lighterBlack } = theme.colors;
const { lightGrey } = theme.colors;
const { display, body } = theme.typography.font.family;


const StyledContainer = styled.section`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: ${display};
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 1.17;
    text-align: center;
    margin-top: -3.2rem;
    color: ${lighterBlack};
  }
  p {
    width: 100%;
    font-family: ${body};
    font-size: 1.3rem;
    font-weight: light;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    margin: 0 auto;
    margin-top: -1.4rem;
    display: flex;
    justify-content: center;
    color: ${lightGrey};
  }
`;

const StyledCancelButton = styled.button`
  font-size: 1.6rem;
  padding: 0;
  position:absolute;
  border: none;
  background: none;
  button:focus { outline: none; };
  cursor: pointer;
  bottom: 1rem;
  right: 12.6rem;
  color: Blue;
`;


const StyledSubmitButton = styled.button`
  font-size: 1.6rem;
  padding: 0;
  position:absolute;
  border: none;
  background: none;
  button:focus { outline: none; };
  cursor: pointer;
  bottom: 1rem;
  right: 5rem;
  color: Blue;
`;







const SubmitExample = ({ getGTM, t, props }) => {

  // 't' comes from 'AboutUs' scope for translation
  const [visible, setVisible] = useState(false);
  const [visibletwo, setVisibleTwo] = useState(false);

  const handleCancel = async (e) => {
    setVisible(false);
  };

  const showPopUp = async (e) => {
    setVisible(true);
  };

  const handleClick = (e) => {
    console.log("submit")
  };
  const handleCancelTwo = async (e) => {
    setVisibleTwo(false);
  };

  const showPopUpTwo = async (e) => {
    setVisibleTwo(true);
  };








  return (
    <>
      <LinkButton
        id={getGTM("getInvolved")}
        type="primary"
        shape="round"
        onClick={showPopUp}
      >
        {t("getInvolved")}
      </LinkButton>
      <Modal
        style={{ border: "3rem" }}
        visible={visible}
        width={564}
        footer={null}
        centered={true}
        onCancel={handleCancel}
      >
        <StyledContainer>
          <h2>Submit Application</h2>
          <br></br>
          <p>Once confirmed, this action cannot be undone. Your application will be forwarded to the organization.</p>
          <StyledCancelButton onClick={handleCancel} > Exit </StyledCancelButton>
          <StyledSubmitButton onClick={handleClick} > Cancel  </StyledSubmitButton>
        </StyledContainer>
      </Modal>
      <LinkButton
        id={getGTM("getInvolved")}
        type="primary"
        shape="round"
        onClick={showPopUpTwo}
      >
        {t("getInvolved")}
      </LinkButton>
      <Modal
        style={{ border: "3rem" }}
        visible={visibletwo}
        width={564}
        footer={null}
        centered={true}
        onCancel={handleCancelTwo}
      >
        <StyledContainer>
          <h2>Submit Application</h2>
          <br></br>
          <p>Once confirmed, this action cannot be undone. Your application will be forwarded to the organization.</p>
          <StyledCancelButton onClick={handleCancel} > Cancel </StyledCancelButton>
          <StyledSubmitButton onClick={handleClick} > Submit  </StyledSubmitButton>
        </StyledContainer>
      </Modal>

    </>
  );
};

export default SubmitExample;
