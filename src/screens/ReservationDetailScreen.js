import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils';
import BackButton from '../components/BackButton'
import HeaderComponent from '../components/HeaderComponent'
import InfoComponent from '../components/InfoComponent'
import Line from '../components/Line'

export default class ReservationDetailScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="Reservation Detail" />,
    headerLeft: <BackButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <InfoComponent caption={"Confirmed Date: Sat, 4th December 2018"} />
        <DestinationCard>
          <LogoText>{'From:'}</LogoText>
          <DestinationText>{' South Croydon'}</DestinationText>
          <Image source={require('../assets/buss.png')} />
          <LogoText>{'To:'}</LogoText>
          <DestinationText>{' London'}</DestinationText>
        </DestinationCard>
        <Line width="88%" marginLeft={20} />
        <DestinationDetails>
          <WrapperOne>
            <SubTitle>Bus Name</SubTitle>
            <LogoText>London Travels</LogoText>
          </WrapperOne>
          <WrapperOne style={{ marginRight: 40 }}>
            <SubTitle>Boarding Time</SubTitle>
            <LogoText>5:45 PM</LogoText>
          </WrapperOne>
        </DestinationDetails>
        <DestinationDetails>
          <WrapperOne>
            <SubTitle>Ticket ID</SubTitle>
            <LogoText>LA3264512</LogoText>
          </WrapperOne>
          <WrapperOne style={{ marginRight: 85 }}>
            <SubTitle>Seat No</SubTitle>
            <LogoText>10</LogoText>
          </WrapperOne>
        </DestinationDetails>
        <DestinationDetails>
          <WrapperOne>
            <SubTitle>Age</SubTitle>
            <LogoText>25 Years</LogoText>
          </WrapperOne>
          <WrapperOne style={{ marginRight: 75 }}>
            <SubTitle>Members</SubTitle>
            <LogoText>1</LogoText>
          </WrapperOne>
        </DestinationDetails>
        <TotalContainer>
          <Line width="88%" marginTop={10} marginLeft={20} />
          <UserDetails>
            <UserLogo source={require("../assets/user.png")} />
            <Title>Miss, Hilery Nitson</Title>
            <View style={{ marginLeft: 80 }}>
              <Caption style={{ color: '#b8bece' }}>Total Fare</Caption>
              <Title>$ { 120.00 }</Title>
            </View>
          </UserDetails>
        </TotalContainer>
        <View style={{ marginTop: 150 }}>

        </View>
        <ButtonWrapper>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.handleLogin}>
                <Button>
                  <ButtonText>Cancel</ButtonText>
                </Button>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.handleLogin}>
                <Button>
                  <ButtonText>Download</ButtonText>
                </Button>
            </TouchableOpacity>
          </View>
        </ButtonWrapper>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #ffffff;
`
const DestinationCard = styled.View`
  flex-direction: row;
  width: 95%;
  margin: 30px 0px 20px 20px;
`
const LogoText = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
`
const Image = styled.Image`
  width: 18px;
  height: 18px;
  margin-left: 40px;
  margin-right: 40px;
`
const DestinationText = styled.Text`
  /* font-weight: 600; */
  font-size: 15px;
`
const DestinationDetails = styled.View`
  flex-direction: row;
  margin: 20px 20px 5px;
  justify-content: space-between;

`
const WrapperOne = styled.View`
  
`
const SubTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`
const TotalContainer = styled.View`
  width: 95%;
  margin: 5px 20px;
`
const Caption = styled.Text`
  line-height: 30px;
  font-size: 16px;
`
const UserDetails = styled.View`
  margin-top: 5px;
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: center;
`
const UserLogo = styled.Image`
  width: 26px;
  height: 26px;
`
const Button = styled.View`
  background: ${colors.primaryColor1};
  width: 80%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 5px 5px ${colors.primaryColor1};
`;
const ButtonText = styled.Text`
  color: ${colors.textColor};
  font-weight: 600;
  font-size: 20px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`
const ButtonWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`