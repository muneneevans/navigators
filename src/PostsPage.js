import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 54;
  color: orange;
`;

const Button = styled.TouchableOpacity`
  margin-horizontal: 10;
  margin-vertical: 10;
  padding-horizontal: 30;
  padding-vertical: 10;
  justify-content: center;
  align-items: center;
  elevation: 1;
  background-color: orange;
`;
const ButtonText = styled.Text`
  font-size: 24;
  color: white;
`;

class PostsPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Title>Posts</Title>
        <Button
          onPress={() => {
            this.props.navigation.navigate('PostItemPage');
          }}>
          <ButtonText>Post Item 1</ButtonText>
        </Button>
        <Button
          onPress={() => {
            this.props.navigation.navigate('PostItemPage');
          }}>
          <ButtonText>Post Item 2</ButtonText>
        </Button>
      </Container>
    );
  }
}

export default PostsPage;
