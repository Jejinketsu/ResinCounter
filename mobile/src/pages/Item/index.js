import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

import ItemOverview from '../../components/ItemOverview';
import ItemDetails from '../../components/ItemDetails';

const Item = ({name}) => {
    return (
        <View style={styles.container}>
            <ItemOverview />
            <ItemDetails />
            <View style={styles.sponsor_box}>
                <Text style={styles.sponsor_text_label}>Random Sponsor</Text>
            </View>
        </View>
    );
};

export default Item;
