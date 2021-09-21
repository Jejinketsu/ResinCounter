import React from 'react';
import {View, Text} from 'react-native';

const Item = ({name}) => {
    return (
        <View>
            <Text style={{color: '#000'}}>Hello {name}</Text>
        </View>
    );
};

export default Item;
