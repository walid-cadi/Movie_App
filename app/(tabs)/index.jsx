import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { AlignLeft } from 'lucide-react';

const ios = Platform.OS === "ios";
export default function Home() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "mt-2" : "mt-3"}>
        <StatusBar style="light" />
        <View className="flex-1 items-center justify-between">
        <AlignLeft />
        </View>
      </SafeAreaView>
    </View>
  );
}
