import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import React from 'react'

export default function RestaurantItem() {
    return (
        <View>

        </View>
    )
}
const RestaurantImage = () => (
    <>
        <Image
            source={{
                uri: ""
            }}
            style={{
                width: "100%",
                height: 180
            }}
        />
        <TouchableOpacity tyle={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>

)