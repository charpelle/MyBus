import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'


export default class TouristComponent extends Component {
  render() {
    return (
      <Container style={{ elevation: 10 }}>
        <Cover>
          <Image source={this.props.image} />
        </Cover>
        <Content>
          <Caption>{this.props.caption}</Caption>
        </Content>
      </Container>
    )
  }
}

const Container = styled.View`
  background: white;
  width: 55%;
  height: 120px;
  border-radius: 14px;
  margin: 0px 7px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

const Cover = styled.View`
  width: 100%;
  height: 90px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 30px
`
const Caption = styled.Text`
  color: #3c4560;
  font-size: 13px;
  font-weight: 600;
`