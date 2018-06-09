import React from 'react';
import styled from 'styled-components';
import Wrapper from "./GridWrapper"
import img from './../__assets/images/macBrow.jpg'

const SectionName = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  color: #ff6d6d;
`
const Header = styled.h2`
  color: #282828;
  font-size: 4rem;
  font-weight: 500;
  margin-top: 1.5rem;
`
const Description = styled.p`
  color: #282828;
  font-size: 1.6rem;
  font-weight: 500;
  max-width: 64.7rem;
  margin: 4.8rem auto 0;
`
const SectionWrap = styled.div`
  text-align: center;
  margin-top: 10.8rem;
  @media(max-width: 1240px) {
    margin-top: 5rem;
  }
`
const ImgWrap = styled.div`
  width: 100%;
  max-width: 76.8rem;
  margin: 0 auto;
`
const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 9.3rem auto 0;
`

export default () => (
  <Wrapper>
    <SectionWrap>
      <SectionName>NEW DESIGN</SectionName>
      <Header>Some awesone features</Header>
      <Description>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.
        Etiasem malesuada magn. Vestibulum felis euismod semper.
      </Description>
    </SectionWrap>
    <ImgWrap><Img src={img}/></ImgWrap>

  </Wrapper>
);
