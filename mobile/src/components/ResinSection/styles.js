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
});
