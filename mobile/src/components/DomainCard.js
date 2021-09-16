import React from 'react';
import { View, Text, Image, ScrollView, FlatList} from 'react-native';

import styles from '../styles/components/DomainCardStyle.js';

const DomainCard = ({name, type, rewards}) => {
    return (
        <View style={styles.domain_card}>
            <View style={styles.domain_card_left_side}>
                <Text style={styles.domain_name}>{name}</Text>
                <Text style={styles.domain_type_text}>+ {` ${type}`}</Text>
            </View>
            <View style={styles.domain_card_rigth_side}>
                <Text style={styles.rewards_text}>Possible Rewards</Text>
                <FlatList data={rewards} horizontal style={styles.reward_list_box}
                    renderItem={({item}) => (
                        <View style={styles.item_box}>
                            <Image style={{width: 50, height: 50}} source={{ uri: item.uri }} />
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

export default DomainCard;