import {StyleSheet} from 'react-native';
import colors from '../../styles/default_style';

export default StyleSheet.create({
    overview_container: {
        flex: 1,
        backgroundColor: '#45f',
    },
    header: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    header_rarity_1: {
        backgroundColor: colors.rarity_1_header_color,
    },
    header_rarity_2: {
        backgroundColor: colors.rarity_2_header_color,
    },
    header_rarity_3: {
        backgroundColor: colors.rarity_3_header_color,
    },
    header_rarity_4: {
        backgroundColor: colors.rarity_4_header_color,
    },
    header_rarity_5: {
        backgroundColor: colors.rarity_5_header_color,
    },
    item_name: {
        fontFamily: 'HYWenHei 85W',
        fontSize: 18,
    },
});
