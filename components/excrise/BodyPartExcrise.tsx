import BODYPARTS from '@/constants/BodyParts';
import { View, Image, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useNavigation, useRouter } from 'expo-router';

type IProps = {
    bordPartName: string;
};
const BodyPartExcrise = ({ bordPartName }: IProps) => {
    const router = useRouter();

    const bodypartImgeUrl = BODYPARTS.find(
        (item) => item.bodyPartName == bordPartName
    );
    return (
        <>
            <View className=' rounded-br-3xl rounded-bl-3xl overflow-hidden relative'>
                <Image
                    resizeMode='cover'
                    source={bodypartImgeUrl?.imageUrl}
                    style={{ width: wp(100), height: hp(55) }}
                />
                <TouchableOpacity
                    className='absolute '
                    style={{ top: hp(7), left: wp(4) }}
                    onPress={() => {
                        router.back();
                    }}
                >
                    <Ionicons
                        name='arrow-back-circle-outline'
                        size={34}
                        color={Colors.primaryColor}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default BodyPartExcrise;
