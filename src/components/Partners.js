import React from 'react';
import styled from 'styled-components';
import Wrapper from "./GridWrapper"
import pic1 from './../__assets/images/BackG_Partners.jpg'
import part1 from './../__assets/images/partner-logo-1.png'
import part2 from './../__assets/images/partner-logo-4.png'
import part3 from './../__assets/images/partner-logo-5.png'
import part4 from './../__assets/images/partner-logo-7.png'
import part5 from './../__assets/images/partner-logo-8.png'

const BackG = styled.div`
  width: 100%;
  background: url(${pic1}) center center/cover;
  padding: 9.6rem 0 11rem;
`;

const Comments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Comment = styled.div`
  margin-right: 6.5rem;
  max-width: 32.4rem;
  text-align: center;
  &:last-of-type {
    margin-right: 0;
  }
  @media(max-width: 1075px) {
    margin: 4rem 0 0;
  }
`;

const Img = styled.div`
  width: 7.4rem;
  height: 7.4rem;
  border: 0.2rem solid #1d1e24;
  background-color: #4e4e5e;
  margin: 0 auto;
`;

const Name = styled.h5`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 2.6rem;
`

const Position = styled.p`
  color: #ff6d6d;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1.2rem;
`
const Discription = styled.p`
  opacity: 0.66;
  color: #fff;
  font-family: "Exo 2";
  font-size: 1.6rem;
  font-style: italic;
  line-height: 2.6rem;
  margin-top: 3.7rem;
`
const Sponsors = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10.9rem;
  flex-wrap: wrap;
  align-content: center;
`
const Sponsor = styled.div`
  width: 12rem;
  height: 5.4rem;
  background: url(${props => props.src}) top left/cover;
  @media(max-width: 1075px) {
    margin: 1rem;
  }
`

export default () => (
  <BackG>
    <Wrapper>
      <Comments>
        <Comment>
          <Img />
          <Name>Jonathon Doe</Name>
          <Position>Co Founder</Position>
          <Discription>
            “Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id gravida at eget metus. Etiasem malesuada magn”
          </Discription>
        </Comment>
        <Comment>
          <Img />
          <Name>Jonathon Doe</Name>
          <Position>Co Founder</Position>
          <Discription>
            “Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id gravida at eget metus. Etiasem malesuada magn”
          </Discription>
        </Comment>
        <Comment>
          <Img />
          <Name>Jonathon Doe</Name>
          <Position>Co Founder</Position>
          <Discription>
            “Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id gravida at eget metus. Etiasem malesuada magn”
          </Discription>
        </Comment>
      </Comments>
      <Sponsors>
        <Sponsor src={part1}/>
        <Sponsor src={part2}/>
        <Sponsor src={part3}/>
        <Sponsor src={part4}/>
        <Sponsor src={part5}/>
      </Sponsors>
    </Wrapper>
  </BackG>
);
