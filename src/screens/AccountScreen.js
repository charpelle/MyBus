import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils';
import { menus } from '../data';
import BackButton from '../components/BackButton'
import HeaderComponent from '../components/HeaderComponent'
import InfoComponent from '../components/InfoComponent'
import Line from '../components/Line'
import MenuItem from '../components/MenuItem';

export default class AccountScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="My Account" />,
    headerLeft: <BackButton navigation={navigation} />
  })
  
  render() {
    return (
      <Container>
        <InfoComponent caption={"User information"} />
        <UserDetails>
          <Avatar source={require("../assets/user.png")} />
          <Name>Hilery Nitson</Name>
          <Phone>+91 234566898</Phone>
        </UserDetails>
        <Menu>
          {
            menus.map((data, index) => (
              <MenuItem key={index} image={data.image} name={data.name} />
            ))
          }
        </Menu>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #ffffff;
`
const UserDetails = styled.View`
  width: 100%;
  height: 150px;
  margin-top: 20px;
  align-items: center;
`
const Avatar = styled.Image`
  width: 88px;
  height: 88px;
`
const Name = styled.Text`
  margin: 5px 0px;
  font-size: 15px;
  color: #000000;
  font-weight: bold;
`
const Phone = styled.Text`
  margin: 5px 0px;
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
`
const Menu = styled.View`
  width: 90%;
  margin: 20px;
`