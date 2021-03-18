import React, { forwardRef, useState } from "react";
import styled from "styled-components";

import { blockLabelStyles } from "constants/formStyles";
import { mq, theme } from "constants/theme";
import InputError from "./InputError";
import InputInfo from "./InputInfo";
import Label from "./Label";

const { colors } = theme;

const FormInput = styled.input.attrs(({ maxLength, min, max }) => ({
  maxLength: maxLength || Number.MAX_SAFE_INTEGER,
  min: min || Number.MIN_SAFE_INTEGER,
  max: max || Number.MAX_SAFE_INTEGER,
}))`
  border: none;
  box-shadow: none;
  color: ${colors.black};
  flex-grow: 1;
  overflow: auto;
  padding-bottom: 0.5rem;
`;

const OuterWrapper = styled.div`
  margin: 1rem auto;
  position: relative;
  text-align: left;
  width: 100%;
`;

const InputWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.royalBlue};
  display: flex;
  margin: 0.4rem 0;
  &.has-error {
    border-bottom: 1px solid ${colors.red};
    color: ${colors.red};
  }
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const Prefix = styled.span`
  padding-bottom: 0.5rem;
`;

const CharCounter = styled.p`
  color: ${colors.darkGray};
  /* position: relative; */
  /* right: 0; */
  width: 100%;
  text-align: right;

  &.has-error {
  color: ${colors.red};
}
`;

export default forwardRef(
  (
    {
      inputTitle,
      name,
      defaultValue,
      error,
      icon,
      prefix,
      placeholder,
      counter,
      ...props
    },
    ref,
  ) => {
    const charsLeft =
      props.maxLength && props.value && props.maxLength - props.value.length;
    const [count, setCount] = useState(0);
    return (

      <OuterWrapper>
        <Label
          icon={icon}
          htmlFor={name}
          style={blockLabelStyles}
          label={inputTitle}
        />
        <InputWrapper className={error && "has-error"}>
          {prefix && <Prefix>{prefix}</Prefix>}
          <FormInput
            name={name}
            id={name}
            defaultValue={defaultValue}
            ref={ref}
            // placeholder={placeholder}
            {...props}
            onChange={(event) => setCount(event.target.value.length)}
          />
          <CharCounter className={count > 250 && "has-error"}> {count} / {250} </CharCounter>
        </InputWrapper>

        {typeof charsLeft === "number" && charsLeft !== props.maxLength && (
          <InputInfo
            error={charsLeft === 0}
          >{`${charsLeft} characters left`}</InputInfo>
        )}
        {error && <InputError>{error.message}</InputError>}
      </OuterWrapper>
    );
  },
);
