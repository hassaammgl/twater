import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
    style,
}) => {
    const baseClasses = 'px-6 py-3 rounded-full items-center justify-center';

    const variantClasses = {
        primary: 'bg-primary',
        secondary: 'bg-gray-200 dark:bg-gray-700',
        outline: 'border-2 border-gray-300 dark:border-gray-600',
    };

    const textClasses = {
        primary: 'text-white font-bold text-base',
        secondary: 'text-gray-900 dark:text-white font-bold text-base',
        outline: 'text-gray-900 dark:text-white font-bold text-base',
    };

    return (
        <TouchableOpacity
            className={`${baseClasses} ${variantClasses[variant]} ${disabled || loading ? 'opacity-50' : ''}`}
            onPress={onPress}
            disabled={disabled || loading}
            style={style}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? 'white' : '#1DA1F2'} />
            ) : (
                <Text className={textClasses[variant]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};
