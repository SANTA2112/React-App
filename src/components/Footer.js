import React from 'react';
import styled from 'styled-components';
import Wrapper from "./GridWrapper";
import EX from './../__assets/images/polygon-1.png';
import shares from './../__assets/images/4-layers.png';
import message from './../__assets/images/10.png';

const SquareWrap = styled.div`
  position: relative;
  padding: 10rem 0;
  overflow: hidden;
`;

const Square = styled.div`
  width: 74rem;
  height: 154.1rem;
  background-color: #ff6d6d;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(44%,12%) rotate(-44deg);
  @media(max-width: 1500px) {
    display: none;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 865px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled.div`
  @media(max-width: 865px) {
    margin-bottom: 2rem;
  }
`;

const Header = styled.h4`
  color: #2c2f49;
  font-size: 2.7rem;
  font-weight: 400;
  margin-bottom: 2.3rem;
  & span {
    display: inline-block;
    position: relative;
    color: #fff;
  }
  & span::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -44%);
    width: 4.3rem;
    height: 4.7rem;
    background: url(${EX}) center center/cover;
    z-index: -1;
  }
`;

const Text = styled.p`
  max-width: 23rem;
  opacity: 0.56;
  color: #282828;
  font-size: 1.4rem;
  font-weight: 500;
`;

const Link = styled.a`
  color: #282828;
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: none;
  display: block;
  margin-bottom: 2rem;
  &:last-of-type {
    margin: 0;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  margin-bottom: 1.9rem;
`;

const Input = styled.input`
  border-radius: 0.3rem;
  border: 0.1rem solid #4e4e5e;
  background-color: #8d8d8d;
  opacity: 0.4;
  padding: 1.3rem 2.5rem;
`;

const Button = styled.button`
  width: 5.2rem;
  height: 4.9rem;
  box-shadow: 0 0.3rem 0.3rem rgba(14, 15, 15, 0.25);
  border-radius: 0.3rem;
  border: 0.1rem solid #ff6d6d;
  background-color: #ff6d6d;
  cursor: pointer;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${message});
    width: 2.2rem;
    height: 2.2rem;
  }
`;

const Shares = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Share = styled.a`
  width: 2rem;
  height: 2.1rem;
  background-image: url(${props => props.src});
  background-position: ${props => props.pos}px;
`;

export default () => (
  <SquareWrap>
    <Wrapper>
      <Square />
      <Menu>
        <Item>
          <Header>Start <span>Ex</span></Header>
          <Text>
            Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
            USA &  CAN: 1-888-123-4567
            Address: 34 Brokel Rd. NY
          </Text>
        </Item>
        <Item>
          <Header>Support</Header>
          <Link href="#">Help Center</Link>
          <Link href="#">Get Started</Link>
          <Link href="#">Contact US</Link>
        </Item>
        <Item>
          <Header>About US</Header>
          <Link href="#">About Us</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Privacy Policy</Link>
        </Item>
        <Item>
          <Header>Get Newsletter</Header>
          <Form>
            <Input placeholder="EMAIL" />
            <Button />
          </Form>
          <Shares>
            <Share href="#" src={shares} pos={0}/>
            <Share href="#" src={shares} pos={-42}/>
            <Share href="#" src={shares} pos={-88}/>
            <Share href="#" src={shares} pos={20}/>
          </Shares>
        </Item>
      </Menu>
    </Wrapper>
  </SquareWrap>
);
