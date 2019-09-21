import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import { colors } from '../utils'

class LoginModal extends Component {
  state = {
    iconEmail: require("../assets/icon-email.png"),
    iconPassword: require("../assets/icon-password.png"),
    email: "",
    password: ""
  }

  handleLogin = () => {

  }
  render() {
    return (
      <Container>
        <Modal>
          <Header>LOGIN</Header>
            <View>
              <TextInput
                onChangeText={email => this.setState({ email })}
                placeholder="Email"
                keyboardType="email-address"
                onFocus={this.focusEmail}
              />
              <TextInput
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={this.focusPassword}
              />
              <IconEmail source={this.state.iconEmail} />
              <IconPassword source={this.state.iconPassword} />
            </View>
            <TouchableOpacity onPress={this.handleLogin}>
              <Button>
                <ButtonText>Login</ButtonText>
              </Button>
            </TouchableOpacity>
            <Subtitle></Subtitle>
            <SocialWrapper>
              <FacebookImage />
              <GoogleImage />
            </SocialWrapper>
        </Modal>
      </Container>
    )
  }
}

export default LoginModal

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: white
`
const Modal = styled.View`
`
const Header = styled.Text`
  color: #000000;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 30px;
`
const TextInput = styled.TextInput`
  background: white;
  width: 295px;
  height: 44px;
  padding: 12px 16px 12px;
  box-shadow: 0 5px 10px rgba(0,0,0, 0.05);
  align-items: center;
  border-radius: 20px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 54px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Button = styled.View`
  background: ${colors.primaryColor1};
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 5px 5px ${colors.primaryColor1};
  margin-top: 50px;
`;
const ButtonText = styled.Text`
  color: ${colors.textColor};
  font-weight: 600;
  font-size: 20px;
`;
const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 35px;
  left: 15px;
`;
const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 92px;
  left: 18px;
`;

const Subtitle = styled.Text`
`

const SocialWrapper = styled.View`
`
const FacebookImage = styled.Image`
`
const GoogleImage = styled.Image`
`