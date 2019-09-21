import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils';
import { history } from '../data'
import BackButton from '../components/BackButton'
import HeaderComponent from '../components/HeaderComponent'
import InfoComponent from '../components/InfoComponent'
import HistoryCard from '../components/HistoryCard'

export default class PreviousScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="Previous Rides" />,
    headerLeft: <BackButton navigation={navigation} />
  })
  
  render() {
    return (
      <Container>
        <InfoComponent caption={"See history"} />
        {
          history.map((data, index) => (
            <HistoryCard key={index} data={data} />
          ))
        }
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #ffffff;
`
