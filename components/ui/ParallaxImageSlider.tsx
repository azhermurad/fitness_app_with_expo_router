import { View, Text, FlatList, Image, Dimensions, Button } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Indecator from '../Indecator';
import { useEffect, useRef, useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

const IMAGES = [
    require('../../assets/images/image2.jpg'),
    require('../../assets/images/image1.jpg'),
    require('../../assets/images/image3.jpg'),
    require('../../assets/images/image4.jpg'),
    require('../../assets/images/image2.jpg'),
];

const ParallaxImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View
            style={{
                // position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Animated.FlatList
                onScroll={(e) => {
                    setCurrentIndex(
                        +(e.nativeEvent.contentOffset.x / wp(100)).toFixed(0)
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                pagingEnabled
                data={IMAGES}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <Animated.View
                            entering={FadeInDown.delay(100)
                                .springify()
                                .damping(30)
                                .mass(4)}
                            style={{
                                height: hp(25),
                                width: wp(100),
                                justifyContent: 'center',
                                alignItems: 'center',
                                // borderRadius:20
                            }}
                        >
                            <View
                                style={{
                                    width: '90%',
                                    height: '90%',
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    source={item}
                                    style={{ width: wp(100), height: hp(25) }}
                                />
                            </View>
                        </Animated.View>
                    );
                }}
            />

            {/* indecatore slider */}
            {/* <Button title='aaa' onPress={()=>{
                console.log(flateRef.current.scrollToIndex({animated:true,index:4}))
            }}/> */}
            <View
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    bottom: 20,
                }}
            >
                <Indecator number={6} currentIndex={currentIndex} />
            </View>
        </View>
    );
};

export default ParallaxImageSlider;
