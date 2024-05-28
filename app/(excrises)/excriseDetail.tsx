import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ExcriseDetailTitle from '@/components/excrise/ExcriseDetail/ExcriseDetailTitle';
import ExcriseDetialSubTitile from '@/components/excrise/ExcriseDetail/ExcriseDetialSubTitile';

const ExcriseDetail = () => {
    const router = useRouter();
    const { gifUrl, bodyPart, name, equipment, target, instructions } =
        useLocalSearchParams();
    const intrationText = instructions?.toString().split(',');

    return (
        <View className='flex-1'>
            <View
                style={{
                    borderBottomLeftRadius: wp(20),
                    overflow: 'hidden',
                }}
            >
                <Image
                    source={{ uri: gifUrl as string }}
                    style={{ width: wp(100), height: hp(50) }}
                />
                <TouchableOpacity
                    onPress={() => {
                        router.back();
                    }}
                    style={{
                        position: 'absolute',
                        top: hp(8),
                        left: wp(5),
                    }}
                >
                    <Ionicons
                        name='arrow-back-circle-sharp'
                        size={32}
                        color={'orange'}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                }}
            >
                <ExcriseDetailTitle title={name as string} />
                <View
                    style={{
                        padding: 10,
                    }}
                >
                    <ExcriseDetialSubTitile
                        name='Equipment'
                        title={equipment as string}
                    />
                    <ExcriseDetialSubTitile
                        name='Target'
                        title={target as string}
                    />
                </View>

                {/* instructions */}
                <ExcriseDetailTitle title={'Instructions'} />
                {intrationText?.map((value) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            columnGap: 10,
                            marginBottom: 10,
                            alignItems: 'center',
                        }}
                    >
                        <Ionicons
                            name='arrow-forward-circle-sharp'
                            size={20}
                            color={'orange'}
                        />
                        <View
                            style={{
                                width: 0,
                                flexGrow: 1,
                                flex: 1,
                                paddingVertical: 5,
                            }}
                        >
                            <Text>{value}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ExcriseDetail;
