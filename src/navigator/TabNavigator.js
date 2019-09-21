import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from '../screens/HomeScreen'
import ResultScreen from '../screens/ResultScreen';
import PassengerScreen from '../screens/PassengerScreen'
import PaymentScreen from '../screens/PaymentScreen'
import ReservationDetailScreen from '../screens/ReservationDetailScreen'
import AccountScreen from '../screens/AccountScreen'
import NotificationScreen from '../screens/NotificationScreen'
import PreviousScreen from '../screens/PreviousScreen';

const HomeStack = createStackNavigator({
  ResultScreen,
  PreviousScreen,
  NotificationScreen,
  AccountScreen,
  ReservationDetailScreen,
  PaymentScreen,
  PassengerScreen,
  HomeScreen
})

const TabNavigator = createBottomTabNavigator({
  HomeStack
})

export default createAppContainer(TabNavigator)