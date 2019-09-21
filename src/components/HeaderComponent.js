import React from 'react'
import styled from 'styled-components'

import { colors } from '../utils'

const HeaderComponent = (props) => {
  return (
    <HeadContent>
      <HeadText>{props.caption}</HeadText>
    </HeadContent>
  )
}

export default HeaderComponent

const HeadContent = styled.View`
  justify-content: center;
  align-items: center;
`
const HeadText = styled.Text`
  color: ${colors.textColor};
  font-size: 18px;
  font-weight: 600;
  width: 100%
`