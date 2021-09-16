import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../default_style.js';

export default StyleSheet.create({
    container:{
        flex: 1,
    },
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
    farm_box: {
      flex: 1.77,
      alignItems: 'center',
      backgroundColor: colors.primary_color,
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
        color: colors.strong_color
    },
    resin_input: {
        backgroundColor: colors.secondary_color,
        borderWidth: 3,
        borderColor: colors.ternary_color,
        borderRadius: 20,
        height: 35,
        margin: 10,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    resin_icon: {
        flex: 1,
        height: 60,
        position: 'relative',
        bottom: 5,
        left: 5,
    },
    resin_input_text: {
        fontFamily: 'HYWenHei 85W',
        fontSize: 25,
        flex: 2,
        textAlign: 'center'
    },
    edit_icon_box: {
        height: '90%',
        backgroundColor: colors.ternary_color,
        borderRadius: 100,
        width: '15%',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    day_line: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    swipe_text: {
        fontFamily: 'HYWenHei 85W',
        fontSize: 15,
        color: colors.ternary_color,
    },
    day_box: {
        width: '50%',
        backgroundColor: colors.secondary_color,
        borderWidth: 3,
        borderColor: colors.ternary_color,
        borderRadius: 20,
    },
    day_text: {
        fontFamily: 'HYWenHei 85W',
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
    },
    domain_grid: {
        flex: 0.935,
        marginTop: 3,
        backgroundColor: colors.secondary_color,
        borderColor: colors.ternary_color,
        borderWidth: 2,
        borderRadius: 5,
    },
    sponsor_box: {
        flex: 0.35,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    sponsor_text_label: {
        fontFamily: 'HYWenHei 85W',
        fontSize: 18,
    }
});