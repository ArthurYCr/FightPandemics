import React from "react";
import styled from "styled-components";
import { theme } from "constants/theme";

const { royalBlue } = theme.colors;

const StyledLabel = styled.label`
  color: ${(props) => props.color || royalBlue};
`;

const LabelIcon = styled.img`
  margin-right: 1rem;
`;

const Label = ({ htmlFor, icon, label, style, className }) => (
  <StyledLabel htmlFor={htmlFor} style={style} className={className}>
    {icon && <LabelIcon src={icon} />}
    {label}
  </StyledLabel>
);

export default Label;
