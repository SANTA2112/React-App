import React from 'react';
import styled from 'styled-components';

import headerLogo from "./../__assets/images/headerLogo.jpg";

const Header = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${headerLogo}) center center/cover;
`;

const Container = styled.div`
  width: 70.8rem;
  text-align: center;
`

const Slogan = styled.h1`
  color: #282828;
  font-family: "Exo 2";
  font-weight: 100;
  font-size: 6rem;
  line-height: 7.5rem;
`;
const ButtonPlay = styled.button`
  width: 5.9rem;
  height: 5.9rem;
  border: none;
  background: url(${require('./../__assets/images/play-button.svg')}) center center/cover no-repeat;
  transition: .3s;
  cursor: pointer;
  margin: 4.3rem 0 3.9rem;
  &:hover {
    opacity: .8;
  }
`;

const Link = styled.a`
  display: inline-block;
  padding: 1.8rem 5rem 2rem;
  background-color: #ff6d6d;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: none;
  letter-spacing: 0.32rem;
  text-transform: uppercase;
  border-radius: .3rem;
  transition: .3s;
  &:hover {
    opacity: .8;
  }
`;

const Explanation = styled.p`
  opacity: .6;
  margin-top: 1.9em;
  font-size: 1.4rem;
`;
export default () => (
  <Header>
    <Container>
      <Slogan>There is no other platforms for you as like</Slogan>
      <ButtonPlay />
      <div>
        <Link href="#">Try now</Link>
        <Explanation>* No need to add cards details</Explanation>
      </div>
    </Container>
  </Header>
)
