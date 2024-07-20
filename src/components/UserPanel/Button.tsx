import { useState } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../themes/colors';
import { sizes } from '../../themes/sizes';
import { fonts } from '../../themes/fonts';

export default function UserPanelButton({ text, iconName, onPress }) {

    const [fontColor, setFontColor] = useState(colors.orange);

    return (
        <TouchableHighlight
            activeOpacity={1}
            underlayColor={colors.lightOrange}
            onPressIn={() => setFontColor(colors.white)}
            onPress={onPress}
            onPressOut={() => setFontColor(colors.orange)}
            style={styles.container}>
            <View style={styles.content}>
                <Ionicon name={iconName}
                size={25}
                color={fontColor}
                style={{
                    position: 'absolute',
                    left: 20,
                    lineHeight: 25,
                    height: 25
                }}></Ionicon>
                <Text style={{
                    position: 'absolute',
                    left: 60,
                    fontFamily: 'Comfortaa Bold',
                    fontSize: sizes.medium,
                    lineHeight: sizes.medium + 8,
                    color: fontColor,
                }}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        color: colors.white,
        width: '60%',
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.lightOrange,
        borderRadius: 7,
    },
    content: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});