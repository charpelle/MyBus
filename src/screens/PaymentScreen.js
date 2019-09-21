import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils'
import { cards } from '../data'
import BackButton from '../components/BackButton'
import HeaderComponent from '../components/HeaderComponent'
import InfoComponent from '../components/InfoComponent'
import PaymentCard from '../components/PaymentCard'
import Line from '../components/Line'

export default class PaymentScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="Payment Option" />,
    headerLeft: <BackButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <InfoComponent caption={"How would you like to pay"} />
        <PaymentContainer>
          <Title>Choose a payment option</Title>
          {cards.map((data, index) => (
            <PaymentCard key={index} image={data.image} name={data.name} />
          ))}
        </PaymentContainer>
        <TravelSummaryContainer>
          <Title>TRAVEL SUMMARY</Title>
        </TravelSummaryContainer>
        <TravelDetailsContainer>
          <Caption>South Croydon to London, Tuesday, 4th Dec</Caption>
          <Caption>London Travel at 6.00 PM</Caption>
          <Caption style={{ color: '#b8bece' }}>1 Person Travelling</Caption>
          <Line width="100%" marginTop={20} />
          <UserDetails>
            <UserLogo source={require("../assets/user.png")} />
            <Title>Miss, Hilery Nitson, 25 years</Title>
          </UserDetails>
        </TravelDetailsContainer>
        <TotalContainer>
          <Caption style={{ color: '#b8bece' }}>Total Fare</Caption>
          <Title>$ { 120.00 }</Title>
        </TotalContainer>
        <TouchableOpacity onPress={this.handleLogin}>
            <Button>
              <ButtonText>Pay Now</ButtonText>
            </Button>
          </TouchableOpacity>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #ffffff;
`
const PaymentContainer = styled.View`
  height: 200px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0,0,0, 0.1);
  margin: 20px 10px;
  width: 95%;
  border: 1px solid #dbdfea;
`
const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`
const TravelSummaryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const TravelDetailsContainer = styled.View`
  width: 95%;
  margin: 20px 10px;
`
const Caption = styled.Text`
  line-height: 30px;
  font-size: 16px;
`
const UserDetails = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: flex-end;
`
const UserLogo = styled.Image`
  width: 26px;
  height: 26px;
`
const TotalContainer = styled.View`
  align-items: flex-end;
  margin-right: 20px;
`
const Button = styled.View`
  background: ${colors.primaryColor1};
  width: 95%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 5px 5px ${colors.primaryColor1};
  margin: 50px 20px;
`;
const ButtonText = styled.Text`
  color: ${colors.textColor};
  font-weight: 600;
  font-size: 20px;
`;