import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function DishRow({ item }) {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name} </Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full aspect-square"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <View className="justify-center items-center">
                <Icon.Minus strokeWidth={2} width={20} stroke={"white"} />
              </View>
            </TouchableOpacity>
            <Text className="px-3">{3}</Text>

            <TouchableOpacity
              className="p-1 rounded-full aspect-square"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <View className="justify-center items-center">
                <Icon.Plus strokeWidth={2} width={20} stroke={"white"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
