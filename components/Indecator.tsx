import { View, Text } from 'react-native';
import React from 'react';

const Indecator = ({ number,currentIndex }: { number: number,currentIndex: number }) => {
    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                {new Array(number).fill('').map((i, index) => (
                    <View
                        key={index}
                        style={{
                            width: currentIndex ==index ? 12:6,
                            height: currentIndex ==index? 8 : 6,
                            backgroundColor: currentIndex ==index ? "white":"gray" ,
                            borderRadius: 10,
                            marginHorizontal: 2,
                        }}
                    />
                ))}
            </View>
        </>
    );
};

export default Indecator;
