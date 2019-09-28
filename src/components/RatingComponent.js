import React from 'react';

import { MaterialIcons } from '@expo/vector-icons'


export default RatingComponent = ({ rating }) => {
  const stars = new Array(5).fill(0)
  return (
    stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= (index + 1);
      return (
        <MaterialIcons
          name="star"
          key={`star-${index}`}
          size={15}
          color={activeStar ? 'yellow': 'gray'}
        />
      )
    })
  )
}