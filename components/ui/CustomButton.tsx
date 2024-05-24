import {
    View,
    Text,
    TouchableOpacity,
    GestureResponderEvent,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type IProps = {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
};

const CustomButton: React.FC<IProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: wp(80), height: hp(7) }}
            className='p-2 items-center justify-center border-[4px] border-[#FEBA4F]  rounded-full'
        >
            <Text
                style={{ fontSize: hp('2.3%') }}
                className='text-white font-bold p-1 tracking-wide'
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
