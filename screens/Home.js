import { View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { SafeAreaView } from 'react-native'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <SafeAreaView style={{
      backgroundColor: "#eee",
      flex: 1,

    }}>
      <View style={{
        backgroundColor: "white",
        padding: 15
      }}>
        <HeaderTabs />
        <SearchBar />
        <Categories />
      </View>
    </SafeAreaView>
  )
}