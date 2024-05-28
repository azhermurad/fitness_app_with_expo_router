import { View, Text } from 'react-native';
import React, { FC, ReactNode } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';

type ITitle = {
    children: ReactNode;
    fontsize?: number;
    color?: string;
};
const Title: FC<ITitle> = ({ children, color = 'black', fontsize = 2 }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text
                className={`font-bold text-[${color}] py-3 `}
                style={{
                    fontSize: hp(fontsize),
                    textTransform: 'capitalize',
                    borderBottomColor: 'orange',
                    borderBottomWidth: 4,
                    paddingBottom: 4,
                    textAlign: 'center',
                    paddingHorizontal: 10,
                }}
            >
                {children}
            </Text>
        </View>
    );
};

export default Title;
