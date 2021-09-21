import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/default_style.js';

export default StyleSheet.create({
    resin_box: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary_color,
    },
    title_text: {
        color: colors.strong_color,
        fontSize: 30,
        fontFamily: 'HYWenHei 85W',
    },
    timers_box: {
        flex: 1,
        flexDirection: 'row',
    },
    central_timer: {
        flex: 3,
        alignItems: 'center',
    },
    timer_box: {
        backgroundColor: colors.secondary_color,
        borderWidth: 3,
        borderColor: colors.ternary_color,
        height: 150,
        width: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    full_time_text: {
        fontFamily: 'HYWenHei 85W',
        fontSize: 20,
    },
    next_time_text: {
        fontFamily: 'HYWenHei 85W',
        fontSize: 12,
        color: colors.strong_color,
    },
});
