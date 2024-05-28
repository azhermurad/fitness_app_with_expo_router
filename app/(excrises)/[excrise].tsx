import { ScrollView, Text, View, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import useFetchApi from '@/hooks/ApiFetch';
import BodyPartExcrise from '@/components/excrise/BodyPartExcrise';
import { StatusBar } from 'expo-status-bar';
import BodyExcriseList from '@/components/BodyExcriseList';
import { BODYEXVRISE } from '@/constants/BodyParts';

const ExcriseDetail = () => {
    const bordPartName = useLocalSearchParams()['excrise'] as string;

    //  const [data, isLoading, error] =useFetchApi({url: `exercises/bodyPart/${bordPartName}`})

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar style='light' />
            <BodyPartExcrise bordPartName={bordPartName} />
            {/* {isLoading ? (
                <View style={{justifyContent:"center",marginTop:10}}>
                    <ActivityIndicator size='large' color='#00ff00' />
                </View>
            ) : (error && !isLoading) ? (
                <Text>{error}</Text>
            ) : (
                <BodyExcriseList
                    bordPartName={bordPartName}
                    bodyExcrise={data}
                />
            )} */}
            <BodyExcriseList
                bordPartName={bordPartName}
                bodyExcrise={BODYEXVRISE}
            />
        </ScrollView>
    );
};

export default ExcriseDetail;
