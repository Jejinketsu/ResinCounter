import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles.js';

const ResinInput = () => {
    return (
        <View style={styles.resin_input}>
            <Image
                style={styles.resin_icon}
                source={require('../../../assets/images/Resin_Icon.png')}
            />
            <Text style={styles.resin_input_text}>110</Text>
            <View style={styles.edit_icon_box}>
                <Icon
                    style={styles.edit_icon}
                    name="edit"
                    size={18}
                    color="#000"
                />
            </View>
        </View>
    );
};

export default ResinInput;
