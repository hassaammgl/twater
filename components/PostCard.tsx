import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface PostProps {
    id?: string;
    avatar: string;
    name: string;
    handle: string;
    time: string;
    content: string;
    image?: string;
    replies: number;
    reposts: number;
    likes: number;
    views: number;
}

export const PostCard: React.FC<PostProps> = ({
    id,
    avatar,
    name,
    handle,
    time,
    content,
    image,
    replies,
    reposts: initialReposts,
    likes: initialLikes,
    views,
}) => {
    const router = useRouter();
    const [liked, setLiked] = useState(false);
    const [reposted, setReposted] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikes);
    const [repostCount, setRepostCount] = useState(initialReposts);

    const toggleLike = () => {
        if (liked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setLiked(!liked);
    };

    const toggleRepost = () => {
        if (reposted) {
            setRepostCount(prev => prev - 1);
        } else {
            setRepostCount(prev => prev + 1);
        }
        setReposted(!reposted);
    };

    const handlePress = () => {
        if (id) {
            router.push(`/post/${id}`);
        }
    };

    return (
        <TouchableOpacity
            className="flex-row px-4 py-3 border-b border-gray-200 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-900"
            onPress={handlePress}
            activeOpacity={1}
        >
            <Image source={{ uri: avatar }} className="w-12 h-12 rounded-full mr-3" />
            <View className="flex-1">
                <View className="flex-row items-center mb-1">
                    <Text className="font-bold text-[15px] text-gray-900 dark:text-white mr-1" numberOfLines={1}>
                        {name}
                    </Text>
                    <Text className="text-[15px] text-gray-500 dark:text-gray-400 flex-1" numberOfLines={1}>
                        @{handle} · {time}
                    </Text>
                    <TouchableOpacity className="p-1 -mr-2">
                        <Ionicons name="ellipsis-horizontal" size={18} color="#6B7280" />
                    </TouchableOpacity>
                </View>

                <Text className="text-[15px] leading-5 mb-3 text-gray-900 dark:text-white">{content}</Text>

                {image && (
                    <Image
                        source={{ uri: image }}
                        className="w-full h-[280px] rounded-2xl mb-3 border border-gray-200 dark:border-gray-800"
                        resizeMode="cover"
                    />
                )}

                <View className="flex-row justify-between max-w-[425px]">
                    <TouchableOpacity className="flex-row items-center group">
                        <View className="p-2 -ml-2 rounded-full">
                            <Ionicons name="chatbubble-outline" size={18} color="#6B7280" />
                        </View>
                        <Text className="text-[13px] ml-1 text-gray-500 dark:text-gray-400 min-w-[20px]">{replies}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center" onPress={toggleRepost}>
                        <View className="p-2 rounded-full">
                            <Ionicons
                                name={reposted ? "repeat" : "repeat-outline"}
                                size={18}
                                color={reposted ? "#00BA7C" : "#6B7280"}
                            />
                        </View>
                        <Text className={`text-[13px] ml-1 min-w-[20px] ${reposted ? 'text-twitter-green' : 'text-gray-500 dark:text-gray-400'}`}>
                            {repostCount}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center" onPress={toggleLike}>
                        <View className="p-2 rounded-full">
                            <Ionicons
                                name={liked ? "heart" : "heart-outline"}
                                size={18}
                                color={liked ? "#F91880" : "#6B7280"}
                            />
                        </View>
                        <Text className={`text-[13px] ml-1 min-w-[20px] ${liked ? 'text-twitter-pink' : 'text-gray-500 dark:text-gray-400'}`}>
                            {likeCount}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center">
                        <View className="p-2 rounded-full">
                            <Ionicons name="stats-chart-outline" size={18} color="#6B7280" />
                        </View>
                        <Text className="text-[13px] ml-1 text-gray-500 dark:text-gray-400 min-w-[20px]">{views}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="p-2 rounded-full">
                        <Ionicons name="share-outline" size={18} color="#6B7280" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};
