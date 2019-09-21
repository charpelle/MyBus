import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const ResultCard = (props) => {
  return (
    <Container>
      <FirstColumn>
        <Logo source={props.image} />
      </FirstColumn>
      <SecondColumn>
        <BodyText style={{ fontSize: 15, fontWeight: 'bold' }}>{props.company}</BodyText>
        <BodyText style={{ color: '#b8bece' }}>{props.category}</BodyText>
        <Wrapper>
          <BodyText style={{ color: '#b8bece' }}>{props.seats}</BodyText>
          <BodyText style={{ color: '#b8bece' }}>{props.time}</BodyText>
          <BodyText style={{ color: '#b8bece' }}>{props.stops}</BodyText>
        </Wrapper>
          <BodyText>Rating</BodyText>
      </SecondColumn>
      <ThirdColumn>
        <BodyText>{props.comfort}</BodyText>
        <BodyText style={{ marginBottom: 0, fontWeight: 'bold' }}>{props.cost}</BodyText>
      </ThirdColumn>
    </Container>
  )
}

export default ResultCard

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
  justify-content: space-between;
`
const Wrapper = styled.View`
  flex-direction: row;
`