import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const ProgressBar = ({progress}) => {
    return(
        <View style={styles.bg}>
            <View style={[styles.fg, {width: `${progress * 100}%` }]}>
                 <View style={styles.highlight} />
            </View>                            
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "lightgrey",
        height: 20,
        flex: 1,
        borderRadius: 15,
    },
    fg: {
        flex: 1,
        backgroundColor: "#FAC800",
        borderRadius: 15,
    },
    highlight: {
        backgroundColor: "#FAD131",
        width: "85%",
        height: 6,
        borderRadius: 5,
        marginTop: 5,
        alignSelf: "center",
    }
})

export default ProgressBar;