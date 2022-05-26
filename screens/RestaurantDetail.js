import { View} from 'react-native'
import React from 'react'

import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import { Divider } from '@rneui/base'



export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.2} />
      <MenuItems />
    </View>
  )
}

