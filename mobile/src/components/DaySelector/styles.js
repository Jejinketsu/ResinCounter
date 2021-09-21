import {StyleSheet} from 'react-native';
import colors from '../../styles/default_style.js';

export default StyleSheet.create({
    day_line: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    day_box: {
        width: '50%',
        backgroundColor: colors.secondary_color,
        borderWidth: 3,
        borderColor: colors.ternary_color,
        borderRadius: 20,
    },
    day_selector: {
        alignItems: 'center',
    },
    day_text: {
        padding: 0,
        fontFamily: 'HYWenHei 85W',
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
    },
});
