import React, { Component } from 'react'
import { TouchableOpacity, View, ScrollView } from 'react-native'
import styled from 'styled-components'

import { colors } from '../utils'
import { tourist } from '../data'
import HeaderComponent from '../components/HeadComponent';
import TouristComponent from '../components/TouristComponent';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: <HeaderComponent />
  }

  handleSearch = () => {

  }

  render() {
    return (
      <Container>
        <DestinationCard>
          <LogoText>From</LogoText>
          <Wrapper>
            <Image source={require('../assets/destination.png')} />
            <DestinationText>South Croydon</DestinationText>
          </Wrapper>
          <Line />
          <SwapImage source={require('../assets/swap.jpeg')} />
          <LogoText>To</LogoText>
          <Wrapper>
            <Image source={require('../assets/destination.png')} />
            <DestinationText>South Croydon</DestinationText>
          </Wrapper>
        </DestinationCard>
        <DateCard>
          <LogoText style={{ color: 'black', fontWeight: "400" }}>Journey Date</LogoText>
          <Wrapper style={{ marginTop: 15 }}>
            <CalenderImage source={require('../assets/calender.jpeg')} />
            <DateText style={{ fontSize: 22, fontWeight: 'bold' }}>4</DateText>
            <View>
              <DateText style={{ fontSize: 14 }}>Tue</DateText>
              <DateText style={{ fontSize: 13 }}>Dec,</DateText>
            </View>
            <DateText style={{ marginLeft: 155 }}>Today</DateText>
          </Wrapper>
        </DateCard>
        <TouchableOpacity onPress={this.handleSearch}>
          <Button>
            <ButtonText>Search Bus</ButtonText>
          </Button>
        </TouchableOpacity>
        <Title>London Tourist Place</Title>
        <ScrollView
          style={{
            flexDirection: "row",
            padding: 10,
            paddingLeft: 12,
            paddingTop: 10,
            width: '100%'
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {tourist.map((data, index) => (
            <TouristComponent 
              key={index}
              image={data.image}
              caption={data.caption}
            />
          ))}
        </ScrollView>
        
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #ffffff;
  align-items: center;
`

const DestinationCard = styled.View`
  width: 90%;
  height: 150px;
  background: white;
  margin: 30px 0px 10px;
  border-radius: 14px;
  box-shadow: 10px 10px 20px rgba(0,0,0, 0.15); 
  padding: 15px;
`
const Wrapper = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center
`
const LogoText = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
`
const Image = styled.Image`
  width: 26px;
  height: 26px;
`
const DestinationText = styled.Text`
  /* font-weight: 600; */
  font-size: 18px;
  margin-left: 20px;
`
const Line = styled.View`
  background: #E0E0E0;
  height: 1;
  width: 80%;
  margin: 10px 0px;
`
const SwapImage = styled.Image`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  right: 20px;
`
const DateCard = styled.View`
  width: 90%;
  height: 100px;
  background: white;
  margin: 20px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.15); 
  padding: 15px;
`
const DateText = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`
const CalenderImage = styled.Image`
  width: 32;
  height: 32;
`
const Button = styled.View`
  background: ${colors.primaryColor1};
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 5px 5px ${colors.primaryColor1};
  margin-top: 10px;
`;
const ButtonText = styled.Text`
  color: ${colors.textColor};
  font-weight: 600;
  font-size: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-top: 50px;
  width: 90%
`