import { View, Text, Button, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { ParallaxImage } from 'react-native-snap-carousel';
import ParallaxImageSlider from '../components/ui/ParallaxImageSlider';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import BodyParts from '@/components/BodyParts';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Home = () => {
    return (
        <SafeAreaView
            // edges={['top']}
            style={{
                backgroundColor: 'white',
                flex: 1,
            }}
        >
            <StatusBar style='dark' />
            <View className='flex-row bg-[#FEBA4F] items-center justify-between p-3'>
                <Animated.View
                    entering={FadeInDown.delay(100)
                        .springify()
                        .damping(30)
                        .mass(4)}
                    className='py-4'
                >
                    <Text
                        style={{ fontSize: hp(5) }}
                        className='font-bold tracking-wide text-white'
                    >
                        Strengthen
                    </Text>
                    <Text
                        style={{ fontSize: hp(5) }}
                        className='font-bold tracking-wide text-black'
                    >
                        Your Body
                        <Text className='text-white'>...</Text>
                    </Text>
                </Animated.View>
                <View className=' items-center '>
                    <View
                        style={{ height: hp(6), width: hp(6) }}
                        className='mb-3'
                    >
                        <Image
                            source={require('../assets/images/man.jpeg')}
                            className='rounded-full border-[#FEBA4F] border-[4px]'
                            style={{
                                height: '100%',
                                width: '100%',
                                borderLeftWidth: 12,
                            }}
                        />
                    </View>
                    <View>
                        <FontAwesome5 name='dumbbell' size={24} color='black' />
                    </View>
                </View>
            </View>
            <ParallaxImageSlider />
            {/* body parts section */}
            <BodyParts />
        </SafeAreaView>
    );
};

export default Home;
// border-[3px] border-red-500
