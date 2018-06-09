import React from 'react';
import styled from 'styled-components';
import Wrapper from "./GridWrapper"

const SectionName = styled.h3`
  color: #ff6d6d;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.32rem;
  margin-top: 19rem;
  @media(max-width: 1172px) {
    margin: 3rem;
  }
`;

const Header = styled.h2`
  color: #282828;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 0.16rem;
  max-width: 55rem;
  margin: 1.6rem 0 4.5rem;
  & span {
    color: #ff6d6d;
  }
`;

const Description = styled.p`
  opacity: 0.66;
  color: #282828;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;
  letter-spacing: 0.064rem;
  max-width: 57rem;
  margin-bottom: 2.4rem;
  &:last-of-type {
    margin-bottom: 15.5rem;
  }
`;

const Square = styled.div`
  width: 100%;
  background-color: #ff6d6d;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(33%,50%) rotate(53deg);
  height: 100%;
`;

const SquareWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
const Sreen = styled.div`
  width: 55.1rem;
  background-color: #ddd;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  @media(max-width: 1172px) {
    display: none;
  }
`;
export default () => (
  <SquareWrapper>
    <Wrapper>
      <SectionName>NEW DESIGN</SectionName>
      <Header>There is no other platforms for you as like <span>....</span></Header>
      <Description>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.
        Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.
      </Description>
      <Description>
        Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.
        Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.
      </Description>
    </Wrapper>
    <Sreen>
      <Square />
    </Sreen>
  </SquareWrapper>
)
