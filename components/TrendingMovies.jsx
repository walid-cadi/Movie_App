import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

var { width, height } = Dimensions.get("window");
export default function TrendingMovies({ data }) {
  const navigate = useNavigation();
  const handleClick = () => {
    navigate.navigate("Movie", item);
  };
  return (
    <View className="flex-col items-center justify-center mt-3">
      <Text className="text-3xl text-white">Trending</Text>
      <Carousel
        data={data}
        firstItem={1}
        inactivateSlideOpacity={0.6}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
        width={width}
        height={height * 0.4}
        autoPlay={false}
        autoPlayInterval={2000}
        loop={true}
        scrollAnimationDuration={1000}
        style={{
          borderRadius: 20,
          overflow: "hidden",
          marginTop: 10,
        }}
      />
    </View>
  );
}

const MovieCard = ({ item , handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View className="flex justify-center items-center">
        <Image
          source={require("../assets/images/8ajzjwKjHQKTicaGGM0t0tpco1j.webp")}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            width: width * 0.6, // Adjust width as needed
            height: height * 0.4, // Adjust height as needed
          }}
          className="rounded-3xl"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
