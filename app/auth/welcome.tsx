import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper className="justify-between p-8">
      <View className="mt-5 items-center">
        <Ionicons name="logo-twitter" size={60} color="#00BA7C" />
      </View>

      <View className="flex-1 justify-center">
        <Text className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          See what&apos;s happening in the world right now.
        </Text>

        <View className="w-full">
          <Button
            title="Create account"
            onPress={() => router.push("/auth/register")}
          />
          <View className="mt-10">
            <Text className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Have an account already?
            </Text>
            <Button
              title="Log in"
              variant="outline"
              onPress={() => router.push("/auth/login")}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
