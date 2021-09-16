import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../default_style.js';

export default StyleSheet.create({
    domain_card: {
        width: '97%',
        marginTop: 5,
        padding: 5,
        backgroundColor: colors.weak_color,
        borderColor: colors.ternary_color,
        borderWidth: 2,
        
        flexDirection: 'row',
    },
    domain_card_left_side: {
        flex: 1,
    },
    domain_card_rigth_side: {
        flex: 1,
    },
    domain_name: {
        fontFamily: "HYWenHei 85W",
        fontSize: 18,
    },
    domain_type_text: {
        fontFamily: "HYWenHei 85W",
        fontSize: 10,
        color: colors.ternary_color,
    },
    rewards_text: {
        fontFamily: "HYWenHei 85W",
        fontSize: 12,
        color: colors.ternary_color,
        alignSelf: 'center',
    },
    reward_list_box: {
        flexDirection: 'row',
    },
    item_box: {
        backgroundColor: colors.secondary_color,
        flex: 1,
        borderWidth: 1,
        borderColor: colors.strong_color,
        margin: 3,
    },
});