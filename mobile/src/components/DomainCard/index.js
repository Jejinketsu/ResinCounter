import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles.js';

const DomainCard = ({navigation, name, type, rewards}) => {
    return (
        <View style={styles.domain_card}>
            <View style={styles.domain_card_left_side}>
                <Text style={styles.domain_name}>{name}</Text>
                <Text style={styles.domain_type_text}>+ {` ${type}`}</Text>
            </View>
            <View style={styles.domain_card_rigth_side}>
                <Text style={styles.rewards_text}>Possible Rewards</Text>
                <FlatList
                    data={rewards}
                    horizontal
                    style={styles.reward_list_box}
                    nestedScrollEnabled={true}
                    renderItem={({item}) => (
                        <View style={styles.item_box}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('Item', {
                                        name: item.name,
                                    })
                                }>
                                <Image
                                    style={{width: 50, height: 50}}
                                    source={{uri: item.uri}}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default DomainCard;
