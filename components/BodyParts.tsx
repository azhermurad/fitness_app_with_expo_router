import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BODYPARTS from '../constants/BodyParts';


const BodyParts = () => {
    const router = useRouter();

    return (
        <View className='flex-1 '>
            <Text
                style={{ fontSize: hp(3) }}
                className=' text-[#FEBA4F] font-bold tracking-wide  p-3'
            >
                Excrices
            </Text>
            <FlatList
                indicatorStyle='black'
                data={BODYPARTS}
                contentContainerStyle={{
                    padding: 10,
                }}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    borderColor: 'red',
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            router.push({
                                pathname: item.bodyPartName,
                                params: { id: 'azher ali' },
                            });
                        }}
                    >
                        <View
                            style={{
                                width: wp(45),
                                height: hp(25),
                                marginBottom: 10,
                                borderRadius: 40,
                                overflow: 'hidden',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                paddingBottom: 20,
                            }}
                        >
                            <Image
                                resizeMode='stretch'
                                source={item.imageUrl}
                                style={{
                                    width: wp(45),
                                    height: hp(25),
                                    position: 'absolute',
                                }}
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,1)']}
                                start={{ x: 0.2, y: 0.3 }}
                                className=''
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',
                                }}
                            />
                            <Text
                                style={{ fontSize: hp(2.3) }}
                                className=' text-[#FEBA4F] font-bold tracking-wide'
                            >
                                {item.bodyPartName}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default BodyParts;
