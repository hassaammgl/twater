import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PostCard } from "@/components/PostCard";
import ScreenWrapper from "@/components/ScreenWrapper";

const USER_POSTS = [
  {
    id: "1",
    avatar: "https://i.pravatar.cc/150?img=68",
    name: "My Profile",
    handle: "myhandle",
    time: "3h",
    content: "Working on something amazing! Stay tuned 🚀",
    replies: 12,
    reposts: 5,
    likes: 45,
    views: 234,
  },
];

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80",
            }}
            className="w-full h-[150px]"
          />
          <View className="px-4 -mt-[35px]">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=68" }}
              className="w-20 h-20 rounded-full border-4 border-white dark:border-black"
            />
          </View>
        </View>

        <View className="p-4">
          <View className="flex-row justify-between items-start mb-3">
            <View>
              <Text className="text-xl font-bold text-gray-900 dark:text-white">
                My Profile
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                @myhandle
              </Text>
            </View>
            <TouchableOpacity
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full"
              onPress={() => router.push("/profile/edit")}
            >
              <Text className="font-semibold text-gray-900 dark:text-white">
                Edit profile
              </Text>
            </TouchableOpacity>
          </View>

          <Text className="text-base mb-3 text-gray-900 dark:text-white">
            Software Engineer | React Native Enthusiast | Building cool things
          </Text>

          <View className="flex-row mb-4">
            <View className="flex-row items-center mr-4">
              <Ionicons name="location-outline" size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                San Francisco, CA
              </Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="link-outline" size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-primary">github.com/expo</Text>
            </View>
          </View>

          <View className="flex-row mb-4">
            <Text className="text-gray-900 dark:text-white mr-4">
              <Text className="font-bold">245</Text> Following
            </Text>
            <Text className="text-gray-900 dark:text-white">
              <Text className="font-bold">1.2K</Text> Followers
            </Text>
          </View>
        </View>

        <View className="border-b border-gray-200 dark:border-gray-800 flex-row">
          <TouchableOpacity className="flex-1 py-4 border-b-4 border-twitter-blue">
            <Text className="text-center font-semibold text-[15px] text-gray-900 dark:text-white">
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-4">
            <Text className="text-center text-[15px] text-gray-500 dark:text-gray-400">
              Replies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-4">
            <Text className="text-center text-[15px] text-gray-500 dark:text-gray-400">
              Media
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-4">
            <Text className="text-center text-[15px] text-gray-500 dark:text-gray-400">
              Likes
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={USER_POSTS}
          renderItem={({ item }) => <PostCard {...item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
