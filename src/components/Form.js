import React from 'react';
import styled from 'styled-components';
import Wrapper from "./GridWrapper"

const FormWrap = styled.div`
  width: 100%;
  background-color: #323969;
  padding: 9.8rem 0 8.5rem;
  text-align: center;
`
const SectionName = styled.h3`
  color: #ff6d6d;
  font-size: 1.6rem;
  font-weight: 500;
`
const Header = styled.h2`
  color: #fff;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 0.16rem;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 9.6rem;
`
const Input = styled.input`
  border-radius: 0.3rem;
  border: 0.1rem solid #ffffff;
  opacity: 0.5;
  padding: 1.8rem;
  margin-right: 3rem;
  color: #000;
  font-size: 1.6rem;
  font-weight: 400;
  @media(max-width: 1172px)  {
    flex-direction: column;
    margin-bottom: 3rem;
  }
  @media(max-width: 628px)  {
    margin-right: 0;
  }
`

const Button = styled.button`
  padding: 1.9rem 9.5rem;
  box-shadow: 0 0.3rem 0.3rem rgba(14, 15, 15, 0.25);
  border-radius: 0.3rem;
  border: 0.1rem solid #ff6d6d;
  background-color: #ff6d6d;
  color: #f6f5f3;
  font-size: 1.6rem;
  font-weight: 400;
  transition: opacity .3s;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
  @media(max-width: 1168px) {
    margin-left: -3rem;
  }
  @media(max-width: 894px)  {
    margin-top: -3rem;
    margin-left: 0;
  }
  @media(max-width: 628px)  {
    margin-top: 0;
    margin-left: 0;
  }
`
const Rules = styled.p`
  opacity: 0.6;
  color: #f6f5f3;
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 5.2rem;
`

export default () => (
  <FormWrap>
    <Wrapper>
      <SectionName>NEW FEATURES</SectionName>
      <Header>Over 1000 designers are using ...</Header>
      <Form>
        <Input placeholder="FULL NAME"/>
        <Input placeholder="YOUR EMAIL"/>
        <Input placeholder="PASSWORD"/>
        <Button>TRY NOW</Button>
      </Form>
      <Rules>By Signing up you agree to our terms & Services.</Rules>
    </Wrapper>
  </FormWrap>
);
