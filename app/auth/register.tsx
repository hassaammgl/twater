import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useAuth } from "@/store/auth";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const { isLoading, signup } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    await signup(email, password);

    // Only redirect if user is set
    if (useAuth.getState().user) {
      router.replace("/(tabs)/profile");
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
          placeholder="Email address"
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

        <View className="mb-5 mt-auto">
          {isLoading ? (
            <ActivityIndicator size="large" color="#00BA7C" />
          ) : (
            <Button
              title="Sign up"
              variant="primary"
              onPress={handleRegister}
              style={{ borderRadius: 30 }}
            />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
