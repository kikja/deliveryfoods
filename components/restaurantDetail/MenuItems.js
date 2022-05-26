import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from "@rneui/themed";
import React from 'react'

const foods = []
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,

  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
})
export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View styles={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage />
          </View>
          <Divider width={0.5} orientation='vertical' />
        </View>
      ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: 'space-evenly', }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
)

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
)