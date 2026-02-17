import { Link } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen() {
    const { signIn, signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async () => {
        setLoading(true);
        if (isLogin) {
            const { error } = await signIn(email, password);
            if (error) Alert.alert('Error', error.message);
        } else {
            const { error, data } = await signUp(email, password);
            if (error) Alert.alert('Error', error.message);
            else if (data && !data.session) Alert.alert('Check your email', 'Please check your inbox for email verification!');
        }
        setLoading(false);
    };

    return (
        <View className="flex-1 justify-center px-8 bg-white">
            <Text className="text-3xl font-bold text-center mb-8">{isLogin ? 'Welcome Back' : 'Create Account'}</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4"
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-6"
            />

            <TouchableOpacity
                onPress={handleAuth}
                disabled={loading}
                className="w-full h-12 bg-blue-600 rounded-lg justify-center items-center mb-4"
            >
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text className="text-white font-bold text-lg">{isLogin ? 'Sign In' : 'Sign Up'}</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsLogin(!isLogin)} className="items-center">
                <Text className="text-blue-600">
                    {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </Text>
            </TouchableOpacity>

            <View className="mt-8 items-center">
                <Link href="/(auth)/onboarding" asChild>
                    <TouchableOpacity>
                        <Text className="text-gray-500">Go to Onboarding (Demo)</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}
