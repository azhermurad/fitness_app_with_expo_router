import { Stack } from 'expo-router';
import '../global.css';

const RootLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                // navigationBarHidden:true,
                // navigationBarColor: 'red'

                // gestureEnabled:true,
                // gestureDirection:"horizontal",
                // animation:'flip',
            }}
        >
            <Stack.Screen name='index' options={{
                 navigationBarHidden:true,
            }} />
             {/* <Stack.Screen name='(excrises)/[excrise]' options={{
                headerShown:true,
                presentation:'modal'


            }} /> */}
        </Stack>
    );
};

export default RootLayout;
