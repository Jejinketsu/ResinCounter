import {StyleSheet} from 'react-native';
import colors from '../../styles/default_style.js';

export default StyleSheet.create({
    domain_grid: {
        flex: 0.935,
        marginTop: 3,
        height: '100%',
        backgroundColor: colors.secondary_color,
        borderColor: colors.ternary_color,
        borderWidth: 2,
        borderRadius: 5,
    },
    scrollView_style: {
        alignItems: 'center',
    },
});
