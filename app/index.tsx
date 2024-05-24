import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppInto from '@/components/AppInto';

export default function IntroScreen() {
    return (
        <View className='flex-1 '>
            <StatusBar style='auto' />
            <AppInto />
        </View>
    );
}























// const [colorScheme, setScheme] = useState<ColorSchemeName | string>(
//   Appearance.getColorScheme()
// );

// useEffect(() => {
//   const subscription = Appearance.addChangeListener((preferences) => {
//       const { colorScheme: scheme } = preferences;
//       setScheme(scheme);
//   });

//   return () => subscription?.remove();
// }, [setScheme]);

// console.log(colorScheme);
