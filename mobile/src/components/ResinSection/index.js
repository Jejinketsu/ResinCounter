import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

import ResinInput from '../ResinInput';
import TimerBox from '../TimerBox';

const ResinSection = () => {
    return (
        <View style={styles.resin_box}>
            <Text style={styles.title_text}>Resin Counter</Text>
            <View style={styles.timers_box}>
                <View style={{flex: 1}} />
                <View style={styles.central_timer}>
                    <TimerBox />
                    <ResinInput />
                </View>
                <View style={{flex: 1}} />
            </View>
        </View>
    );
};

export default ResinSection;
