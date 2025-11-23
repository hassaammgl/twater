import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSearch = () => {
    if (email) {
      Alert.alert(
        "Password Reset",
        "If an account exists with this email, you will receive a password reset link.",
        [{ text: "OK", onPress: () => router.back() }]
      );
    } else {
      Alert.alert("Error", "Please enter your email, phone, or username");
    }
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
        <Text className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Find your X account
        </Text>
        <Text className="text-base mb-8 leading-6 text-gray-500 dark:text-gray-400">
          Enter your email, phone number, or username to change your password.
        </Text>

        <TextInput
          className="h-12 border border-gray-300 dark:border-gray-600 rounded px-3 text-base mb-5 text-gray-900 dark:text-white"
          placeholder="Email, phone, or username"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <View className="mt-auto mb-5">
          <Button
            title="Search"
            onPress={handleSearch}
            style={{ borderRadius: 30 }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
