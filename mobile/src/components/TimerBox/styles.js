import {StyleSheet} from 'react-native';
import colors from '../../styles/default_style';

export default StyleSheet.create({
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
