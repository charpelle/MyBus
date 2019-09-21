import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils'
import { resultCard } from '../data'
import BackButton from '../components/BackButton'
import FilterButton from '../components/FilterButton'
import HeaderComponent from '../components/HeaderComponent'
import ResultCard from '../components/ResultCard';

export default class ResultScreen extends Component {
  state = {
    isLoading: false,
    courses: []
  }

  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="South Craydon to London" />,
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: <FilterButton />
  })


  render() {
    return (
      <Container>
        <DateContainer>
          <DateText>Tue, 4th Dec 2018</DateText>
        </DateContainer>
        <ScrollView
          
        >
          {resultCard.map((data, index) => (
            <ResultCard 
              key={index}
              image={data.image}
              company={data.company}
              category={data.category}
              seats={data.seats}
              time={data.time}
              stops={data.stops}
              comfort={data.comfort}
              cost={data.cost}
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
`
const DateContainer = styled.View`
  width: 100%;
  height: 35px;
  background: ${colors.secondaryColor2};
  align-items: center;
  justify-content: center;
`
const DateText = styled.Text`
  font-size: 15px;
  font-weight: 300;
`
