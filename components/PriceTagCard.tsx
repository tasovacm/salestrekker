import {Text, View} from "react-native";
import * as React from "react";
import {style} from "./style/ComponentStyle"

const PriceTagCard = (props) => {
    return (
        <View style={[style.stampCard, {maxWidth: props.width}]}>
            <Text style={{fontSize: 20}}>{props.header1}</Text>
            <Text style={{fontWeight: "bold", fontSize: 16}}>{props.header2}</Text>
            <Text style={style.cardResultNumeric}>{props.value}</Text>
        </View>
    )
};

export default PriceTagCard;
