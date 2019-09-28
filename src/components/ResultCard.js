import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'


import RatingComponent from './RatingComponent';

const ResultCard = ({ image, data }) => {
  return (
    <Container>
      <FirstColumn>
        <Logo source={image} />
      </FirstColumn>
      <SecondColumn>
        <BodyText style={{ fontSize: 15, fontWeight: 'bold' }}>{data.company}</BodyText>
        <BodyText style={{ color: '#b8bece' }}>{data.category}</BodyText>
        <Wrapper>
          <BodyText style={{ color: '#b8bece' }}>{data.seats} {'seats'}</BodyText>
          <FontAwesome name="circle" size="12" color="gray" />
          <BodyText style={{ color: '#b8bece' }}>{data.time}</BodyText>
          <FontAwesome name="circle" size="12" color="gray" />
          <BodyText style={{ color: '#b8bece' }}>{data.stops}</BodyText>
        </Wrapper>
          <BodyText><RatingComponent rating={data.rating} /></BodyText>
      </SecondColumn>
      <ThirdColumn>
        <BodyText>{data.comfort}</BodyText>
        <BodyText style={{ marginBottom: 0, fontWeight: 'bold' }}>{data.cost}</BodyText>
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
  align-items: stretch;
`