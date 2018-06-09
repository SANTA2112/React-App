import React from 'react';
import styled from 'styled-components';
import Wrapper from "./GridWrapper";
import pic1 from './../__assets/images/picture1.png'
import pic2 from './../__assets/images/picture2.png'
import pic3 from './../__assets/images/picture3.png'
import pic4 from './../__assets/images/coffee-cup.png'
import pic5 from './../__assets/images/earphones.png'
import pic6 from './../__assets/images/pen-holder.png'

const SectionName = styled.h3`
  color: #ff6d6d;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.32rem;
  margin-top: 13.8rem;
  text-align: center;
  @media(max-width: 1240px) {
    margin: 0;
  }
`;

const Header = styled.h2`
  color: #282828;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 0.16rem;
  margin: 1.5rem 0 9.1rem;
  text-align: center;
`;

const FeaturesWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Features = styled.div`
  text-align: center;
  max-width: 34.2rem;
  margin-bottom: 2rem;
  margin-right: 4.6rem;
  &:last-of-type {
    margin-right: 0;
  }
  @media(max-width: 830px) {
    margin-right: 0;
  }
`;

const Image = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  margin: 0 auto;
  background: url(${props => props.src}) center center/cover;
`;

const Heading = styled.h5`
  color: #282828;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: 0.088rem;
  margin-top: 3rem;
`;

const Description = styled.p`
  opacity: 0.66;
  color: #282828;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;
  margin-top: 1.9rem;
`;

const ImgWrap = styled.div`
  position: relative;
`;

const Img1 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: url(${pic4}) center center/cover;
  width: 23.5rem;
  height: 11.4rem;
  transform: translate(12rem, 14rem);
  @media(max-width: 830px) {
    display: none;
  }
`;

const Img2 = styled.div`
  transform: translateY(-14rem);
  position: absolute;
  top: 0;
  right: 0;
  background: url(${pic5}) center center/cover;
  width: 16.2rem;
  height: 21.5rem;
  @media(max-width: 830px) {
    display: none;
  }
`;

const Img3 = styled.div`
  transform: translateY(-14rem);
  position: absolute;
  top: 0;
  left: 0;
  background: url(${pic6}) center center/cover;
  width: 29.1rem;
  height: 31.4rem;
  @media(max-width: 830px) {
    display: none;
  }
`;
export default () => (
    <Wrapper>
      <ImgWrap>
        <SectionName>NEW DESIGN</SectionName>
        <Header>Some awesone features</Header>
        <FeaturesWrap>
          <Features>
            <Image src={pic1}/>
            <Heading>Some awesone features</Heading>
            <Description>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</Description>
          </Features>
          <Features>
            <Image src={pic2}/>
            <Heading>Some awesone features</Heading>
            <Description>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</Description>
          </Features>
          <Features>
            <Image src={pic3}/>
            <Heading>Some awesone features</Heading>
            <Description>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</Description>
          </Features>
        </FeaturesWrap>
        <Img1 />
        <Img2 />
        <Img3 />
      </ImgWrap>
    </Wrapper>

);
