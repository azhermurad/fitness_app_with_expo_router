import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { FC } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Title from './Title';
import { Colors } from '@/constants/Colors';
import { router, useRouter } from 'expo-router';

export type IExcrise = {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
};

type IBodyExcrise = {
    bodyExcrise: IExcrise[];
    bordPartName: string;
};

const BodyExcriseList: FC<IBodyExcrise> = ({ bodyExcrise, bordPartName }) => {
    const router = useRouter()
    return (
        <>
            <View className='p-3'>
                <Title fontsize={4} color={Colors.primaryColor}>
                    {bordPartName}
                </Title>
            </View>
            <FlatList
                data={bodyExcrise}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                refreshing={true}
                contentContainerClassName='p-3'
                columnWrapperStyle={{
                    marginBottom: hp(3),
                    justifyContent: 'space-between',
                }}
            />
        </>
    );
};
const renderItem = ({ item }: { item: IExcrise }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    router.push({
                        pathname: '/excriseDetail',
                        params: item
                    });
                }}
                style={{
                    elevation: 4,
                    borderRadius: 30,
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    width: wp(43),
                    height: hp(25),
                }}
            >
                <Image
                    source={{ uri: item.gifUrl }}
                    style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: hp(2),
                    textAlign: 'center',
                    paddingTop: 5,
                    textTransform: 'capitalize',
                }}
            >
                {item.name.length > 20
                    ? item.name.slice(0, 20) + '...'
                    : item.name}
            </Text>
        </View>
    );
};

export default BodyExcriseList;
