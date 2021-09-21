import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

import * as domainActions from '../../store/actions/domains.js';

import styles from './styles';

const DaySelector = () => {
    const dispatch = useDispatch();
    const {days, selectedDay} = useSelector((state) => state.domains.data);

    return (
        <View style={styles.day_line}>
            <View style={styles.day_box}>
                <Picker
                    mode={'dropdown'}
                    selectedValue={selectedDay}
                    onValueChange={(itemValue) =>
                        dispatch(domainActions.changeSelectedDay(itemValue))
                    }>
                    {days.map((day) => (
                        <Picker.item key={day} label={day} value={day} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default DaySelector;
