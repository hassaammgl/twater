import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { FloatingButton } from '../../components/FloatingButton';
import { PostCard } from '../../components/PostCard';
import  ScreenWrapper  from '@/components/ScreenWrapper';
// import { useTheme } from '../../context/ThemeContext';
import { Colors } from '@/constants/Colors';


const MOCK_POSTS = [
    {
        id: '1',
        avatar: 'https://i.pravatar.cc/150?img=1',
        name: 'John Doe',
        handle: 'johndoe',
        time: '2h',
        content: 'Just launched my new app! Check it out on the App Store 🚀',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
        replies: 45,
        reposts: 12,
        likes: 234,
        views: 1200,
    },
    {
        id: '2',
        avatar: 'https://i.pravatar.cc/150?img=2',
        name: 'Jane Smith',
        handle: 'janesmith',
        time: '5h',
        content: 'Working on something exciting with React Native and Expo! Can\'t wait to share more details soon 👀',
        replies: 23,
        reposts: 8,
        likes: 156,
        views: 890,
    },
    {
        id: '3',
        avatar: 'https://i.pravatar.cc/150?img=3',
        name: 'Tech Weekly',
        handle: 'techweekly',
        time: '1d',
        content: 'The future of mobile development is here. Cross-platform frameworks are getting better every day.',
        replies: 67,
        reposts: 34,
        likes: 445,
        views: 2100,
    },
];

export default function HomeScreen() {
    const colors  = Colors.light;
    const [activeTab, setActiveTab] = useState<'For you' | 'Following'>('For you');

    const renderHeader = () => (
        <View className="border-b border-gray-200 dark:border-gray-800">
            <View className="flex-row">
                <TouchableOpacity
                    className="flex-1 items-center py-4 relative"
                    onPress={() => setActiveTab('For you')}
                >
                    <Text className={`font-bold text-[15px] ${activeTab === 'For you' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        For you
                    </Text>
                    {activeTab === 'For you' && (
                        <View className="absolute bottom-0 w-14 h-1 bg-twitter-blue rounded-full" />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex-1 items-center py-4 relative"
                    onPress={() => setActiveTab('Following')}
                >
                    <Text className={`font-bold text-[15px] ${activeTab === 'Following' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        Following
                    </Text>
                    {activeTab === 'Following' && (
                        <View className="absolute bottom-0 w-16 h-1 bg-twitter-blue rounded-full" />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ScreenWrapper>
            <View className="flex-row justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-800">
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=68' }}
                    className="w-8 h-8 rounded-full"
                />
                <Ionicons name="logo-twitter" size={24} color={colors.tint} />
                <Ionicons name="settings-outline" size={24} color={colors.text} />
            </View>

            {renderHeader()}

            <FlatList
                data={MOCK_POSTS}
                renderItem={({ item }) => <PostCard {...item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 80 }}
            />
            <FloatingButton />
        </ScreenWrapper>
    );
}
