import React, { useEffect, useRef, useState } from "react";
import {
    Text,
    ImageBackground,
    View,
    Animated,
    Dimensions,
    Easing
} from "react-native";

import { loadArticle, loadCategories, loadReadArticles, loadFavoriteArticles } from "../functions";

const w = Dimensions.get("screen").width;

const init = async (go, updateProgressBar) => {
    const categories = await loadCategories();
    if (categories.error) {
        setTimeout(() => go("NoInternet"), 2000);
        return;
    }
    const rawArticles = categories.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.articles], []);
    let articles = [];
    for (let i = 0; i < rawArticles.length; i++) {
        const res = await loadArticle(rawArticles[i]);
        if (!res.error) articles.push({
            ...res,
            id: rawArticles[i]
        });
        updateProgressBar((i + 1) / rawArticles.length);
    }
    const readArticles = await loadReadArticles();
    const favoriteArticles = await loadFavoriteArticles();
    go("Main", { categories, articles, readArticles, favoriteArticles });
}

const Loader = ({ value }) => {

    const translateX = useRef(new Animated.Value(-w)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: -w * (1 - value),
            useNativeDriver: true,
            duration: 150,
            easing: Easing.linear
        }).start();
    }, [value]);

    return <View style={{marginVertical: 14}}>
        <Animated.View style={{width: w, height: 4, backgroundColor: "#9400d3", transform: [{ translateX }]}} />
    </View>;
}

const SplashScreen = ({ navigation }) => {

    const [value, setValue] = useState(0);
    const opacity = useRef(new Animated.Value(0)).current;

    return <View style={{flex: 1, backgroundColor: "#fff"}}>
        <Animated.View style={{flex: 1, opacity}}>
            <ImageBackground
                source={require("../src/splash-image.jpg")}
                style={{flex: 1, alignItems: "center", justifyContent: "flex-end", paddingBottom: 32}}
                onLoad={() => {
                    Animated.timing(opacity, {
                        useNativeDriver: true,
                        toValue: 1,
                        duration: 300
                    }).start();
                    init(navigation.replace, setValue);
                }}
            >
                <Text style={{color: "#572d45", fontSize: 56, lineHeight: 68, fontFamily: "OpenSansCondensed-Bold", textAlign: "center"}}>ПСИХОЛОГИЯ ОТНОШЕНИЙ</Text>
                <Loader value={value} />
                <Text style={{color: "#0a3353", fontSize: 24, fontFamily: "OpenSansCondensed-Bold"}}>жизнь семья любовь</Text>
            </ImageBackground>
        </Animated.View>
    </View>
}

export default SplashScreen;