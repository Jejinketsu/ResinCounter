import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

const ItemOverview = ({item}) => {
    return (
        <View style={styles.overview_container}>
            <View
                style={{
                    ...styles.header,
                    ...styles[`header_rarity_${item.rarity}`],
                }}>
                <Text
                    style={styles.item_name}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    {item.name}
                </Text>
            </View>
        </View>
    );
};

export default ItemOverview;
