import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/Button";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // if (email && password) {
    router.replace("/(tabs)");
    // } else {
    // Alert.alert("Error", "Please enter email and password");
    // }
  };

  return (
    <ScreenWrapper className="px-5">
      <View className="flex-row justify-between items-center py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-base text-gray-900 dark:text-white">
            Cancel
          </Text>
        </TouchableOpacity>
        <Ionicons name="logo-twitter" size={30} color="#00BA7C" />
        <View className="w-[50px]" />
      </View>

      <View className="mt-5 flex-1">
        <Text className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          To get started, first enter your phone, email, or @username
        </Text>

        <TextInput
          className="h-12 border border-gray-300 dark:border-gray-600 rounded px-3 text-base mb-5 text-gray-900 dark:text-white"
          placeholder="Phone, email, or username"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          className="h-12 border border-gray-300 dark:border-gray-600 rounded px-3 text-base mb-5 text-gray-900 dark:text-white"
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View className="mt-auto mb-5">
          <Button
            title="Next"
            onPress={handleLogin}
            style={{ borderRadius: 30 }}
          />
          <TouchableOpacity
          //  onPress={() => router.push('/auth/forgot-password')}
          >
            <Text className="text-center mt-4 text-gray-500 dark:text-gray-400">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
