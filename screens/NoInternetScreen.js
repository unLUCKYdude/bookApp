import React from "react";
import {
    View,
    Text,
    Pressable
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const NoInternetScreen = ({ navigation }) => {
    return <View style={{flex: 1, backgroundColor: "#fff"}}>
        <View style={{backgroundColor: "#9400d3", height: 40, alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontFamily: "OpenSansCondensed-Bold", marginLeft: 16, color: "#fff"}}>Проверьте интернет-подключение</Text>
        </View>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 36}}>
            <Ionicon name="cloud-offline-outline" size={100} color="#000" />
            <Text style={{fontFamily: "OpenSansCondensed-Bold", color: "#000", fontSize: 24, textAlign: "center", marginTop: 16}}>Ошибка при получении данных с сервера</Text>
            <View style={{borderRadius: 8, overflow: "hidden", marginTop: 72}}>
                <Pressable
                    style={{flexDirection: "row", alignItems: "center", backgroundColor: "#9400d3", paddingHorizontal: 16, paddingVertical: 12}}
                    android_ripple={{color: "#000"}}
                    onPress={() => navigation.replace("Splash")}
                >
                    <Ionicon name="refresh" size={25} color="#fff" />
                    <Text style={{fontFamily: "OpenSansCondensed-Bold", marginLeft: 12, color: "#fff", fontSize: 16, marginRight: 6}}>Повторить попытку</Text>
                </Pressable>
            </View>
        </View>
    </View>
}

export default NoInternetScreen;