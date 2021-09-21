import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

import DomainGrid from '../DomainGrid';
import DaySelector from '../DaySelector';

const DomainSection = ({navigation}) => {
    return (
        <View style={styles.farm_box}>
            <Text style={styles.title_text}>---- Daily Farm ----</Text>
            <View>
                <DaySelector />
                <DomainGrid navigation={navigation} />
            </View>
        </View>
    );
};

export default DomainSection;
