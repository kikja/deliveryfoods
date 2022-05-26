import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from "react";
import HeaderTabs from '../components/home/HeaderTabs'
import { SafeAreaView } from 'react-native'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs';


const YELP_API_KEY = 
  "yp-rh1DZ6SccGH6SGc20hm0UTmslE5rOoZf7bKkraubMWqSfCkCQy6_0wm8wJkVErWhNffILc4wZbWZcBaHoDk_7xtJXHjXdVmQVfK2WRcvpjDiEy-Vk3zK5qeGNYnYx"

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState("san Francisco")
  const [activeTab, setActiveTab] = useState("Delivery")
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
  
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  }
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab])
  
  return (
    <SafeAreaView style={{
      backgroundColor: "#eee",
      flex: 1,

    }}>
      <View style={{
        backgroundColor: "white",
        padding: 15
      }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Categories />
          <RestaurantItems 
            restaurantData={restaurantData}
          />
        </ScrollView>
        
        <BottomTabs />
    </SafeAreaView>
  )
}