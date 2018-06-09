import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  margin: auto;
`;

export default ({children}) => <Wrapper>{children}</Wrapper>
