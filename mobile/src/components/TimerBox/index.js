import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const TimerBox = () => {
    return (
        <View style={styles.timer_box}>
            <Text style={styles.full_time_text}>6h 40m 00s</Text>
            <Text style={styles.next_time_text}>120: 1h 20m 00s</Text>
        </View>
    );
};

export default TimerBox;
