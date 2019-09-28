import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styled from 'styled-components'

import { headerStyle, colors } from '../utils'
import { resultCard } from '../data'
import BackButton from '../components/BackButton'
import FilterButton from '../components/FilterButton'
import HeaderComponent from '../components/HeaderComponent'
import ResultCard from '../components/ResultCard';

import firebase from '../config/fbConfig';
import axios from '../utils/axiosConfig';

export default class ResultScreen extends Component {
  state = {
    isLoading: false,
    bookings: []
  }

  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <HeaderComponent caption="South Craydon to London" />,
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: <FilterButton />
  })

  componentDidMount() {
    this.nationalExpress()
  }

  nationalExpress = () => {
    axios.get('/bookings')
      .then(response => this.setState({ bookings: response.data }))
  }

  
  render() {
    if (this.state.isLoading) return null
    return (
      <Container>
        <DateContainer>
          <DateText>Tue, 4th Dec 2018</DateText>
        </DateContainer>
        <ScrollView
          
        >
          {this.state.bookings.map((data, index) => (
            <ResultCard key={index} image={require("../assets/buss.png")} data={data} />
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

const dailyBookings = [
  {
    company: 'GIG',
    category: 'NON A/C SEATERS/SLEEPERS (3+1)',
    seats: '33 seats',
    time: '03:03 hrs',
    stops: '1 rest stop',
    comfort: 'Luxury',
    cost: '120'
  },
  {
    company: 'Chisco',
    category: 'NON A/C SEATERS/SLEEPERS (3+1)',
    seats: '33 seats',
    time: '03:03 hrs',
    stops: '1 rest stop',
    comfort: 'Luxury',
    cost: '120'
  },
  {
    company: 'Young',
    category: 'NON A/C SEATERS/SLEEPERS (3+1)',
    seats: '33 seats',
    time: '03:03 hrs',
    stops: '1 rest stop',
    comfort: 'Luxury',
    cost: '120'
  },
  {
    company: 'Peace',
    category: 'NON A/C SEATERS/SLEEPERS (3+1)',
    seats: '33 seats',
    time: '03:03 hrs',
    stops: '1 rest stop',
    comfort: 'Luxury',
    cost: '120'
  }
]
