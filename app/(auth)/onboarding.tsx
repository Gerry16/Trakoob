import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 justify-center items-center bg-white px-8">
            <Text className="text-2xl font-bold mb-4">Welcome to Trakoob</Text>
            <Text className="text-gray-600 text-center mb-8">
                Manage your business efficiently with our simple tools.
            </Text>

            <TouchableOpacity
                onPress={() => router.back()}
                className="bg-blue-600 px-6 py-3 rounded-full"
            >
                <Text className="text-white font-bold">Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

