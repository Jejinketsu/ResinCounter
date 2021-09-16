import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles/pages/MainStyle.js';
import DomainCard from '../components/DomainCard.js';

const domain_rewards = [
    {
        key: '1',
        uri: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Tile_of_Decarabian%27s_Tower.png/revision/latest/scale-to-width-down/256?cb=20210109220205'
    },
    {
        key: '2',
        uri: 'https://static.wikia.nocookie.net/gensin-impact/images/9/96/Item_Debris_of_Decarabian%27s_City.png/revision/latest/scale-to-width-down/256?cb=20210109220117'
    },
    {
        key: '3',
        uri: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Fragment_of_Decarabian%27s_Epic.png/revision/latest/scale-to-width-down/256?cb=20210109220101'
    },
    {
        key: '4',
        uri: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Scattered_Piece_of_Decarabian%27s_Dream.png/revision/latest/scale-to-width-down/256?cb=20210109220111'
    },
]

const Main = () => {
    return(
        <View style={styles.container}>
            <View style={styles.resin_box}>
                <Text style={styles.title_text}>Resin Counter</Text>
                <View style={styles.timers_box}>
                    <View style={{ flex: 1}}></View>
                    <View style={styles.central_timer}>
                        <View style={styles.timer_box}>
                            <Text style={styles.full_time_text}>6h 40m 00s</Text>
                            <Text style={styles.next_time_text}>120: 1h 20m 00s</Text>
                        </View>
                        <View style={styles.resin_input}>
                            <Image style={styles.resin_icon} source={require('../../assets/images/Resin_Icon.png')} />
                            <Text style={styles.resin_input_text}>110</Text>
                            <View style={styles.edit_icon_box}>
                                <Icon style={styles.edit_icon} name="edit" size={18} color='#000'/>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
            <View style={styles.farm_box}>
                <Text style={styles.title_text}>---- Daily Farm ----</Text>
                <View style={styles.daily_farm}>
                    <View style={styles.day_line}>
                        <Text style={styles.swipe_text}>{'<<< swipe'}</Text>
                        <View style={styles.day_box}>
                            <Text style={styles.day_text}>Monday</Text>
                        </View>
                        <Text style={styles.swipe_text}>{'swipe >>>'}</Text>
                    </View>
                    <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.domain_grid}>
                        <DomainCard name='Cecilian Garden' type='Weapon Ascencion Material' rewards={domain_rewards} />
                        <DomainCard name='Taishan Mansion' type='Talent Level-Up Material' rewards={domain_rewards} />
                        <DomainCard name='Forsaken Rift' type='Talent Level-Up Material' rewards={domain_rewards} />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.sponsor_box}>
                <Text style={styles.sponsor_text_label}>Random Sponsor</Text>
            </View>
        </View>
    );
}

export default Main;