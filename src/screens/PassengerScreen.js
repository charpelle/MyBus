import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils'
import BackButton from '../components/BackButton'
import HeaderComponent from '../components/HeaderComponent'
import InfoComponent from '../components/InfoComponent'

export default class PassengerScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="Passenger Data" />,
    headerLeft: <BackButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <Info caption={"Passenger Data"} />
        <BodyContainer>
          <Header>Passenger 1</Header>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email Address"
            keyboardType="email-address"
            onFocus={this.focusEmail}
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Full Name"
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Identity Card Number"
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <Header>Passenger 2</Header>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email Address"
            keyboardType="email-address"
            onFocus={this.focusEmail}
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Full Name"
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Identity Card Number"
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <TouchableOpacity onPress={this.handleLogin}>
            <Button>
              <ButtonText>Next</ButtonText>
            </Button>
          </TouchableOpacity>
        </BodyContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #ffffff;
`

const BodyContainer = styled.View`
  margin: 20px
`
const Header = styled.Text`
  width: 100%;
`
const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
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