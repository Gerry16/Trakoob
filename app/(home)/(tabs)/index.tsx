import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-2xl font-bold text-gray-800">Dashboard</Text>
            <Text className="text-gray-500 mt-2">Welcome to your dashboard</Text>
        </View>
    );
}
