import React, { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { StyleSheet, View, Text } from 'react-native';

const SliderFscc = ({ initialValue = 0.2, min = 0, max = 1, step = 0.1, onChange }) => {
    const [value, setValue] = useState(initialValue);

    const handleValueChange = (newValue) => {
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <View style={styles.container}>
            <Slider
                value={value}
                onValueChange={handleValueChange}
                minimumValue={min}
                maximumValue={max}
                step={step}
                thumbTintColor="#f50"
                minimumTrackTintColor="#f50"
                maximumTrackTintColor="#d3d3d3"
            />
            <Text>Value: {value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});

export default SliderFscc;
