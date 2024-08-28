import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { getCategories } from "../api";
import { urlFor } from "../sanity";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          const isActive = category._id === activeCategory;

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={`p-1 rounded-full shadow bg-gray-200 ${
                  isActive ? "bg-gray-600" : ""
                }`}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: urlFor(category.image).url() }}
                />
              </TouchableOpacity>
              <Text
                className={`text-sm ${
                  isActive ? "font-semibold text-gray-800" : "text-gray-500"
                }`}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
