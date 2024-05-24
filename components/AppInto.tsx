import { ImageBackground, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from './ui/CustomButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

const AppInto = () => {
    const router = useRouter();

    return (
        <ImageBackground
            resizeMode='cover'
            source={require('../assets/images/image1.jpg')}
            style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
            }}
        >
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                start={{ x: 0.2, y: 0.3 }}
                className=''
                style={{
                    height: '100%',
                    width: '100%',
                    justifyContent: 'flex-end',
                    paddingHorizontal: 20,
                    paddingBottom: 50,
                }}
            >
                    <View className='items-center'>
                        <Animated.View
                            entering={FadeInDown.delay(100)
                                .springify()
                                .damping(30)
                                .mass(4)}
                            className='py-4'
                        >
                            <Text
                                style={{ fontSize: hp(5) }}
                                className='font-bold tracking-wide text-[#FEBA4F]'
                            >
                                Balance{' '}
                                <Text className='text-white'>
                                    your wellness{' '}
                                    <Text className='text-[#FEBA4F]'>...</Text>
                                </Text>
                            </Text>
                        </Animated.View>
                    </View>
                <Animated.View
                    className={'items-center'}
                    entering={FadeInDown.delay(200)
                        .springify()
                        .damping(30)
                        .mass(4)}
                >
                    <CustomButton
                        title="Let's Goo"
                        onPress={() => {
                            router.navigate('/home');
                        }}
                    />
                </Animated.View>
            </LinearGradient>
        </ImageBackground>
    );
};

export default AppInto;

{
    /* <Image
                    resizeMode='cover'
                    source={require('../assets/images/image1.jpg')}
                    // className='w-full h-full'
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                    }}
                /> */
}

{
    /* <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    start={{ x: 0.1, y: 0.2 }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: '100%',
                    }}
                />
                <View className='mb-36 p-4'>
                    <Text className='mb-3 text-3xl text-white text-center'>
                        Fitness is the most important part of the life
                    </Text>
                    <Button
                        title='Lets Start'
                        onPress={() => {
                            router.navigate('/about');
                        }}
                    />
                </View> */
}
