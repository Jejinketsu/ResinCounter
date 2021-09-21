import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

import ItemOverview from '../../components/ItemOverview';
import ItemDetails from '../../components/ItemDetails';

const Item = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <ItemOverview item={route.params.item} />
            <ItemDetails item={route.params.item} />
            <View style={styles.sponsor_box}>
                <Text style={styles.sponsor_text_label}>Random Sponsor</Text>
            </View>
        </View>
    );
};

export default Item;
