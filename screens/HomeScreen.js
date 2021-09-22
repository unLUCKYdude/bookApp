import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {

    return <View style={{flex: 1, backgroundColor: "#fff"}}>
        <View style={{backgroundColor: "#f39c12", height: 60, justifyContent: "space-between", paddingLeft: 16, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontFamily: "OpenSansCondensed-Bold", color: "#fff", fontSize: 24}}>Главная</Text>
            <TouchableOpacity style={{padding: 16}} onPress={() => navigation.openDrawer()}>
                <Ionicon name="menu" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
        <ScrollView style={{padding: 16, flex: 1}}>
            <View style={{backgroundColor: "#f39c12", borderRadius: 16, padding: 16, alignItems: "flex-start"}}>
                <Text style={{fontFamily: "OpenSansCondensed-Bold", color: "#000", fontSize: 18, backgroundColor: "#fff", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16}}>О приложении</Text>
                <Text style={{fontFamily: "OpenSansCondensed-Bold", color: "#fff", fontSize: 16, marginTop: 12}}>Энциклопедия секса для всех. Здесь собраны важные советы, интересные рекомендации, откровенные темы о сексе, табу и фетиши.</Text>
            </View>
            <Text style={{fontFamily: "OpenSansCondensed-Bold", color: "#000", fontSize: 18, marginTop: 32}}>Для каждого взрослого человека необходима сексуальная разрядка. Секс – это не только продолжение жизни, но и перезагрузка всего организма. Интимная близость помогает здоровью и эмоциональному настроению.</Text>
        </ScrollView>
    </View>
}

export default HomeScreen;