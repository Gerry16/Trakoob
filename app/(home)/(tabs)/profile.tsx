import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

export default function ProfileScreen() {
    const { signOut, user } = useAuth();

    const handleSignOut = async () => {
        const { error } = await signOut();
        if (error) {
            Alert.alert('Error', 'Failed to sign out');
        }
    };

    return (
        <View className="flex-1 justify-center items-center bg-white px-8">
            <Text className="text-2xl font-bold text-gray-800 mb-2">Profile</Text>
            <Text className="text-gray-500 mb-8">{user?.email}</Text>

            <TouchableOpacity
                onPress={handleSignOut}
                className="w-full bg-red-500 h-12 rounded-lg justify-center items-center"
            >
                <Text className="text-white font-bold text-lg">Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}
