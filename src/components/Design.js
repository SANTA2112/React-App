import React from 'react';
import styled from 'styled-components';
import Wrapper from "./GridWrapper"
import mac from './../__assets/images/macbook.png'

const Square = styled.div`
  width: 62.2rem;
  height: 120rem;
  background-color: #ff6d6d;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-55%,36%) rotate(-30deg);
  @media(max-width: 1240px) {
    display: none;
  }
`;

const SectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 9rem;
  padding: 9.1rem 0;
  @media(max-width: 1240px) {
    margin: 0;
    padding: 3rem;
  }
`;

const SectionName = styled.h3`
  color: #ff6d6d;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.32rem;
  @media(max-width: 1240px) {
    margin-top: 5rem;
  }
`;

const Header = styled.h2`
  color: #282828;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 0.16rem;
  max-width: 44rem;
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
  max-width: 49.2rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  z-index: 2;
  transform: translateX(-12rem);
  @media(max-width: 1240px) {
    transform: none;
  }
`;
const ImageWpap = styled.div`
  width: 100%;
  max-width: 62rem;
`
const SquareWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

export default () => (
  <SquareWrap>
    <Square />
    <Wrapper>
      <SectionWrap>
        <ImageWpap><Image src={mac}/></ImageWpap>
        <div>
          <SectionName>NEW DESIGN</SectionName>
          <Header>Resposive design, just need your tap <span>....</span></Header>
          <Description>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.
            Etiasem malesuada magn. Vestibulum felis euismod semper.
          </Description>
        </div>
      </SectionWrap>
    </Wrapper>
  </SquareWrap>
);
