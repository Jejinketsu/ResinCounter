import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';
import ResinSection from '../../components/ResinSection';
import DomainSection from '../../components/DomainSection';

const Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ResinSection />
            <DomainSection navigation={navigation} />
            <View style={styles.sponsor_box}>
                <Text style={styles.sponsor_text_label}>Random Sponsor</Text>
            </View>
        </View>
    );
};

export default Main;
