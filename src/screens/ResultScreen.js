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
    this.getData()
    // this.populateData()
  }

  getData = () => {
    this.setState({ isLoading: true })
    const bookingRef = firebase.firestore().collection('bookings')
    this.unsubscribe = bookingRef.onSnapshot(querySnapshot => {
      const bookings = [];
      
      querySnapshot.forEach(doc => {
        const { company, category, seats, time, stops, comfort, cost } = doc.data();
        bookings.push({
          key: doc.id,
          doc,
          company,
          category,
          seats,
          time,
          stops,
          comfort,
          cost
        })
      })
      this.setState({ bookings, isLoading: false })
    })
  }

  populateData = () => {
    dailyBookings.forEach(function(obj) {
      firebase.firestore().collection("bookings").add({
          company: obj.company,
          category: obj.category,
          seats: obj.seats,
          time: obj.time,
          stops: obj.stops,
          comfort: obj.comfort,
          cost: obj.cost
      }).then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
  });
  }

  render() {
    console.log('state', this.state)
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
