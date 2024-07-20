import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from  '../../assets/style/styleUserPanel'
import UserPanelButton from "../components/UserPanel/Button";

import { UserContext } from "../context/AppContext";
import { useContext } from "react";

export default function UserPanel() {

    const {logout} = useContext(UserContext);

    return (
        <View style={styles.container}>
            <View style={styles.userPanelBanner}>
                <View style={styles.userPanelImageBack}>
                    <Image style={{ width: 200, height: 200 }} source={require('../../assets/img/capibara.png')}></Image>
                </View>
            </View>
            <View style={styles.buttonView}>
                <UserPanelButton text={'Mi cuenta'} iconName={'person'} onPress={() => console.log(1)}></UserPanelButton>
                <UserPanelButton text={'Ayuda'} iconName={'help-circle'} onPress={() => console.log(2)}></UserPanelButton>
                <UserPanelButton text={'Acerca de'} iconName={'information-circle'} onPress={() => console.log(3)}></UserPanelButton>
                <UserPanelButton text={'Cerrar Sesión'} iconName={'log-out'} onPress={() => logout()}></UserPanelButton>
            </View>
        </View>
    );
}