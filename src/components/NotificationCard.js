import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const NotificationCard = (props) => {
  return (
    <Container>
      <FirstColumn>
        <Logo source={props.image} />
      </FirstColumn>
      <SecondColumn>
        <BodyText style={{ fontSize: 15, fontWeight: 'bold' }}>{props.notification}</BodyText>
      </SecondColumn>
      <ThirdColumn>
        <BodyText>{props.time}</BodyText>
      </ThirdColumn>
    </Container>
  )
}

export default NotificationCard

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