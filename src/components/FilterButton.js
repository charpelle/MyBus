import React from 'react'
import styled from 'styled-components/native';;

export const FilterButton = ({ navigation }) => {
  return (
    <Container
      onPress={() => navigation.goBack()}
    >
      <FilterImage source={require('../assets/filter.png')} />
    </Container>
  )
}

export default FilterButton

const Container = styled.TouchableOpacity`
  width: 100;
  height: 20;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  margin-right: -40px
`
const FilterImage = styled.Image`
  width: 17;
  height: 17;
`