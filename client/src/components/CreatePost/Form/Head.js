import React from "react";
import { Title, Badge, HeadWrapper } from "../StyledModal";

const Head = ({ number, title }) => {
  return (
    <HeadWrapper>
      <Badge>
        <span>{number}</span>
      </Badge>
      <Title>{title}</Title>
      <span className="required">*</span>
    </HeadWrapper>
  );
};

export default Head;
