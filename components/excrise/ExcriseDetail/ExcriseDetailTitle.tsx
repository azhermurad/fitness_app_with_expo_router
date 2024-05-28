import { View, Text } from 'react-native';
import React from 'react';

const ExcriseDetailTitle = ({ title }: { title: string }) => {
    return (
        <View
            style={{
                marginVertical: 10,
                padding: 10,
                // backgroundColor: 'white',
                borderLeftColor: 'orange',
                borderLeftWidth: 5,
            }}
        >
            <Text
                style={{
                    textTransform: 'capitalize',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}
            >
                {title}
            </Text>
        </View>
    );
};

export default ExcriseDetailTitle;
