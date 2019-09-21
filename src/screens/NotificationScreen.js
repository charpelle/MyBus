import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils';
import { notifications } from '../data'
import BackButton from '../components/BackButton'
import HeaderComponent from '../components/HeaderComponent'
import NotificationCard from '../components/NotificationCard'

export default class NotificationScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="Notifications" />,
    headerLeft: <BackButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        {
          notifications.map((data, index) => (
            <NotificationCard key={index} image={data.image} notification={data.notification} time={data.time} />
          ))
        }
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #05004D;
`
