import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles.js';

import DomainCard from '../DomainCard';

const {width} = Dimensions.get('window');

const DomainGrid = ({navigation}) => {
    const {domains, selectedDay} = useSelector((state) => state.domains.data);

    return (
        <View
            style={{
                ...styles.domain_grid,
                width: (95 * width) / 100,
            }}>
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={styles.scrollView_style}>
                {domains.map((domain) => (
                    <DomainCard
                        navigation={navigation}
                        key={domain.name}
                        name={domain.name}
                        type={domain.type}
                        rewards={domain.rewards[selectedDay]}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default DomainGrid;
