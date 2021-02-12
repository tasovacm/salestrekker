import * as React from "react";
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {screenStyle} from "../style/screenStyle";
import {colors} from "../style/colors";
import {style} from "../../components/style/ComponentStyle";
import ScreenHeader from "../../components/ScreenHeader";
import PriceTagCard from "../../components/PriceTagCard";
import Button from "../../components/Button";
import {useState} from "react";
const LendersMortgageInsuranceCalac = ({navigation, route})=>{
    const [loading, setLoading] = useState<boolean>(false);

    console.log(route.params);

    const getTags = () => {
        let array = [];
        route.params.tags.array.map(item => {
            array.push(<Text numberOfLines={1}
                key={item}
                style={style.tagText}>{item}</Text>)
        });
        return array
    };

    return (
        <ScrollView style={[screenStyle.grow1, {backgroundColor: colors.mainYellow}]}>
            <View style={[style.horizontalPadding20]}>
                <ScreenHeader
                    mainText={'Here is what we found'}
                    subText={'You can edit at any time information of your search'}
                />
            </View>
            <View style={[style.horizontalPadding20, {flexDirection: 'row', flexWrap: 'wrap', marginVertical: 20}]}>
                {getTags()}
            </View>
            {loading ?
                <View style={style.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color="#00ff00"/>
                </View> :
                <View style={[style.resultContainer, style.horizontalPadding20]}>
                    <View style={{marginVertical:30}}>
                        <Text style={[style.mediumHeader]}>Total amount</Text>
                        <Text
                            style={[style.mainResultNumeric]}>$38,897</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <PriceTagCard width={"47%"} header1={"StampDuty"} value={"$31,854"}/>
                        <PriceTagCard width={"47%"} header1={"Premium"} value={"$35,854"}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <PriceTagCard width={"47%"} header1={"StampDuty"} header2={"base"} value={"82.33%"}/>
                        <PriceTagCard width={"47%"} header1={"StampDuty"} header2={"Capitalised"} value={"85.99%"}/>
                    </View>
                    <Button
                        text={'Back'}
                        color={'#000'}
                        backgroundColor={colors.mainYellow}
                        fontSize={24}
                        icon={'leftcircleo'}
                        onPress={() => navigation.goBack()}
                    />
                </View>

            }
        </ScrollView>
    )
};

export default LendersMortgageInsuranceCalac;
