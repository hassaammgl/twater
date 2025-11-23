import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    // Load fonts if needed
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="auth/welcome" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/register" options={{ headerShown: false }} />
      <Stack.Screen
        name="auth/forgot-password"
        options={{ headerShown: false }}
      />
      {/*
      <Stack.Screen
        name="compose"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="settings"
        options={{ title: "Settings", headerBackTitle: "Back" }}
      />
      <Stack.Screen name="profile/edit" options={{ headerShown: false }} />
      <Stack.Screen name="chat/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="post/[id]" options={{ headerShown: false }} /> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
