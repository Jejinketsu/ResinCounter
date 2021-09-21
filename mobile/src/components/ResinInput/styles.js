import {StyleSheet} from 'react-native';
import colors from '../../styles/default_style.js';

export default StyleSheet.create({
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
        alignItems: 'center',
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
        textAlign: 'center',
    },
    edit_icon_box: {
        height: '90%',
        backgroundColor: colors.ternary_color,
        borderRadius: 100,
        width: '15%',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
