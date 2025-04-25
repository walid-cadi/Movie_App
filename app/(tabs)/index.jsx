import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AlignLeft, Search } from "lucide-react-native";
import TrendingMovies from "@/components/TrendingMovies";
import { useState } from "react";
import MoviesList from "@/components/MoviesList";

const ios = Platform.OS === "ios";
export default function Home() {
  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);
  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search Bar And Logo */}
      <SafeAreaView className={ios ? "-mt-1" : "mt-3"}>
        <StatusBar style="light" />
        <View className="flex-row items-center justify-between mx-4">
          <AlignLeft color="white" strokeWidth={1.5} size={32} />
          <Text className="text-white text-3xl font-bold">
            <Text className="text-beta">M</Text>ovies
          </Text>
          <TouchableOpacity>
            <Search color="white" strokeWidth={1.5} size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* trending movies carousel */}
        <TrendingMovies data={trending} />

        {/* upcoming movies row */}
        <MoviesList  title="Upcoming" data={upcoming} />

        {/* top rated movies row */}
        <MoviesList title="Top Rated" data={topRated} />
        
      </ScrollView>
    </View>
  );
}
