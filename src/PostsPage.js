import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #c32727;

  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 54;
  color: white;
`;

const PostsPage = () => {
  return (
    <Container>
      <Title>Posts</Title>
    </Container>
  );
};

export default PostsPage;
