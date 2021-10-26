import React from 'react'
import { useParams } from 'react-router-dom'

import ONama from '../pages/ONama'
import Kontakt from '../pages/Kontakt'
import Donacije from '../pages/Donacije'
import Marketing from '../pages/Marketing'
import Disclaimer from '../pages/Disclaimer'
import Pp from '../pages/Pp'
import Pravila from '../pages/Pravila'
import Kupi from '../pages/Kupi'

const Pages = () => {
  const { page } = useParams()

  const renderPages = () => {
    switch(page) {
      case 'onama':
        return <ONama />
      case 'kontakt':
        return <Kontakt />
      case 'donacije':
        return <Donacije />
      case 'marketing':
        return <Marketing />
      case 'disclaimer':
        return <Disclaimer />
      case 'pp':
        return <Pp />
      case 'pravila':
        return <Pravila />
      case 'kupi':
        return <Kupi />
      default:
        
    }
  }

  return(
    renderPages()
  )
}

export default Pages