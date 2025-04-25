import { useNavigation } from "@react-navigation/native";
import { Scroll } from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MoviesList({ title, data }) {
  let moviename = "Captain America : Brave New World";
  let navigate = useNavigation();
  var { width, height } = Dimensions.get("window");
  return (
    <View className="mt-3">
      <View className=" flex-row items-center justify-between mx-4">
        <Text className="text-3xl text-white">{title}</Text>
        <TouchableOpacity>
          <Text className="text-beta" style={{ fontSize: 16, paddingTop: 5 }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      {/* movies row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15 }}
        style={{}}
      >
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigate.navigate("Movie", item)}
              style={{ marginRight: 10, marginTop: 10 }}
            >
              <View>
                <Image
                  source={require("../assets/images/captain.webp")}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 20,
                  }}
                />
                <Text style={{ color: "white", fontSize: 16, paddingTop: 5 }}>
                  {moviename.length > 14
                    ? moviename.slice(0, 14) + "..."
                    : moviename}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
