import { StyleSheet } from "react-native";

import { width, height } from '../../src/constants/constants'
import { colors } from "../../src/themes/colors";

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: colors.white,
    },
    userPanelBanner: {
        height: '25%',
        backgroundColor: colors.lightPurple,
        marginTop: 32,
        alignItems: 'center'
    },
    userPanelImageBack: {
        position: 'absolute',
        bottom: -112,
        width: 225,
        height: 225,
        backgroundColor: colors.white,
        borderRadius: 225,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        height: '50%',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;