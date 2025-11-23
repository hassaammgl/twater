import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export const FloatingButton = () => {
    const router = useRouter();

    return (
        <TouchableOpacity
            className="absolute bottom-20 right-4 w-14 h-14 rounded-full bg-twitter-blue items-center justify-center shadow-2xl"
            style={{
                shadowColor: '#1DA1F2',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
            }}
            // onPress={() => router.push('/compose')}
            activeOpacity={0.9}
        >
            <Ionicons name="add" size={32} color="white" />
        </TouchableOpacity>
    );
};
