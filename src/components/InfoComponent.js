import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

import { colors } from '../utils'

const InfoComponent = (props) => {
  return (
    <InfoContainer>
      <InfoText>{props.caption}</InfoText>
    </InfoContainer>
  )
}

export default InfoComponent

const InfoContainer = styled.View`
  width: 100%;
  height: 35px;
  background: ${colors.secondaryColor2};
  align-items: center;
  justify-content: center;
`
const InfoText = styled.Text`
  font-size: 15px;
  font-weight: 300;
`