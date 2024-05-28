import { View, Text } from 'react-native';
import React from 'react';


const ExcriseDetialSubTitile = ({name,title}:{title:string,name:string}) => {
    return (
        <Text style={{ textTransform: 'capitalize', fontSize: 16 }}>
            <Text style={{ fontWeight: 'bold' }}>{name}: </Text>
            {title}
        </Text>
    );
};

export default ExcriseDetialSubTitile;
