import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const HistoryCard = (props) => {
  const { image, company, category, origin, bus, destination, cost, comfort, date } = props.data;

  return (
    <Container>
      <FirstColumn>
        <Logo source={image} />
      </FirstColumn>
      <SecondColumn>
        <BodyText style={{ fontSize: 15, fontWeight: 'bold' }}>{company}</BodyText>
        <BodyText style={{ color: '#b8bece' }}>{category}</BodyText>
        <Wrapper>
          <BodyText style={{ color: '#b8bece' }}>{'From: '}</BodyText>
          <BodyText>{origin}</BodyText>
          <Logo source={bus} />
          <BodyText style={{ color: '#b8bece' }}>{'To: '}</BodyText>
          <BodyText>{destination}</BodyText>
        </Wrapper>
          <BodyText style={{ fontWeight: 'bold' }}>{'Paid: $'}{cost}</BodyText>
      </SecondColumn>
      <ThirdColumn>
        <BodyText>{comfort}</BodyText>
        <BodyText style={{ marginTop: 50, color: '#b8bece', width: '150%' }}>{date}</BodyText>
      </ThirdColumn>
    </Container>
  )
}

export default HistoryCard

const Container = styled.View`
  height: 120px;
  background: white;
  margin: 20px 20px 0px;
  border-radius: 14px;
  box-shadow: 10px 10px 20px rgba(0,0,0, 0.15); 
  padding: 15px;
  flex-direction: row;
`
const FirstColumn = styled.View`
  flex: 0.15;
  width: 100%
`
const Logo = styled.Image`
  width: 22px;
  height: 22px;
`
const SecondColumn = styled.View`
  flex: 1;
`
const BodyText = styled.Text`
  font-size: 12px;
  margin-bottom: 10px;
`
const ThirdColumn = styled.View`
  flex: 0.3;
  align-items: flex-end;
`
const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`