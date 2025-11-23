import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name && email && password) {
      // login();
      router.replace("/(tabs)");
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <ScreenWrapper className="px-5">
      <KeyboardAvoidingView className="flex-row justify-between items-center py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-base text-gray-900 dark:text-white">
            Cancel
          </Text>
        </TouchableOpacity>
        <Ionicons name="logo-twitter" size={30} color="#00BA7C" />
        <View className="w-[50px]" />
      </KeyboardAvoidingView>

      <View className="mt-5 flex-1">
        <Text className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          Create your account
        </Text>

        <TextInput
          className="h-12 border border-gray-300 dark:border-gray-600 rounded px-3 text-base mb-5 text-gray-900 dark:text-white"
          placeholder="Name"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          className="h-12 border border-gray-300 dark:border-gray-600 rounded px-3 text-base mb-5 text-gray-900 dark:text-white"
          placeholder="Phone number or email address"
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
            title="Sign up"
            variant="primary"
            onPress={handleRegister}
            style={{ borderRadius: 30 }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
