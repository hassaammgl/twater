import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";

export default function EditProfileScreen() {
  const router = useRouter();

  const [name, setName] = useState("My Profile");
  const [bio, setBio] = useState(
    "Software Engineer | React Native Enthusiast | Building cool things"
  );
  const [location, setLocation] = useState("San Francisco, CA");
  const [website, setWebsite] = useState("https://github.com/expo");

  const handleSave = () => {
    // Mock save
    router.back();
  };

  return (
    <ScreenWrapper>
      <View className="flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-base text-gray-900 dark:text-white">
            Cancel
          </Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-900 dark:text-white">
          Edit Profile
        </Text>
        <TouchableOpacity onPress={handleSave}>
          <Text className="text-base font-bold text-gray-900 dark:text-white">
            Save
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="h-[150px] relative justify-center items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80",
            }}
            className="w-full h-full"
          />
          <View className="absolute bg-black/30 w-10 h-10 rounded-full justify-center items-center">
            <Ionicons name="camera-outline" size={24} color="white" />
          </View>
        </View>

        <View className="px-4 -mt-[35px] mb-3">
          <View className="w-20">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=68" }}
              className="w-20 h-20 rounded-full border-4 border-white dark:border-black"
            />
            <View className="absolute top-1/2 left-1/2 -ml-3 -mt-3 bg-black/30 w-7 h-7 rounded-full justify-center items-center">
              <Ionicons name="camera-outline" size={20} color="white" />
            </View>
          </View>
        </View>

        <View className="px-4">
          <View className="mb-5 border-b border-gray-200 dark:border-gray-800 pb-2">
            <Text className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Name
            </Text>
            <TextInput
              className="text-base text-gray-900 dark:text-white"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View className="mb-5 border-b border-gray-200 dark:border-gray-800 pb-2">
            <Text className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Bio
            </Text>
            <TextInput
              className="text-base text-gray-900 dark:text-white"
              value={bio}
              onChangeText={setBio}
              multiline
            />
          </View>

          <View className="mb-5 border-b border-gray-200 dark:border-gray-800 pb-2">
            <Text className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Location
            </Text>
            <TextInput
              className="text-base text-gray-900 dark:text-white"
              value={location}
              onChangeText={setLocation}
            />
          </View>

          <View className="mb-5 border-b border-gray-200 dark:border-gray-800 pb-2">
            <Text className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Website
            </Text>
            <TextInput
              className="text-base text-primary"
              value={website}
              onChangeText={setWebsite}
              autoCapitalize="none"
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
