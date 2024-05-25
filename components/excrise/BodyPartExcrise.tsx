import BODYPARTS from '@/constants/BodyParts';
import { View, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type IProps = {
    bordPartName: string;
};
const BodyPartExcrise = ({ bordPartName }: IProps) => {
    const bodypartImgeUrl = BODYPARTS.find(
        (item) => item.bodyPartName == bordPartName
    );
    return (
        <>
            <View
                className=' rounded-br-3xl rounded-bl-3xl overflow-hidden'
                style={{ width: wp(100), height: hp(35) }}
            >
                <Image
                    resizeMethod='resize'
                    source={bodypartImgeUrl?.imageUrl}
                    style={{ width: '100%', height: '100%' }}
                />
                <View>
                    
                </View>
            </View>
        </>
    );
};

export default BodyPartExcrise;
