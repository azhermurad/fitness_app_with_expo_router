import { useRouter } from 'expo-router';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
const { width, height } = Dimensions.get('screen');

const AboutScreen = () => {
    const router = useRouter();

    return (
        <View className='flex-1'>
            <ScrollView horizontal className='bg-[red] flex-1'>
                <Animated.View
                    entering={FadeInDown.delay(100)
                        .springify()
                        .damping(30)
                        .mass(4)}
                    style={{ width, height }}
                    className='bg-[green] flex-1'
                >
                    <Text>af</Text>
                </Animated.View>
                <Animated.View
                    entering={FadeInDown.delay(100)
                        .springify()
                        .damping(30)
                        .mass(4)}
                    style={{ width, height }}
                    className='bg-[blue] flex-1'
                >
                    <Text>af</Text>
                </Animated.View>
                <View style={{ width, height }} className='bg-[green] flex-1'>
                    <Text>af</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default AboutScreen;
