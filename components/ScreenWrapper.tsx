import React from "react";
import { StatusBar, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
  className?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  className,
  style,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
    style={[{paddingTop: insets.top},style]}
    className={`flex-1 bg-white dark:bg-black ${className || ""}`}>
      <StatusBar
        // barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />
      {children}
    </View>
  );
};

export default ScreenWrapper;
