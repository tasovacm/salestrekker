import * as React from "react";
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {screenStyle} from "../style/screenStyle";
import {colors} from "../style/colors";
import {style} from "../../components/style/ComponentStyle";
import ScreenHeader from "../../components/ScreenHeader";
import PriceTagCard from "../../components/PriceTagCard";
import Button from "../../components/Button";
import {useState} from "react";
import {useEffect} from "react";
import {api} from "../../core/api/api";
import {formatter} from "../../core/Util/formatter";

const IncomeCalc = ({navigation, route}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [total, setTotal] = useState<string>();


    useEffect(() => {
            api.income(route.params.params)
                .then(response => {
                    response.data.financeIncomeEstimate.map((item) => {
                            formatter.toCurrency(item.totalNetIncome)
                                .then((res: string) => setTotal(res));
                        }
                    )
                })
                .then(() => {
                    setLoading(false);
                });
        }, []
    );


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
        <View style={[screenStyle.grow1, {backgroundColor: colors.mainYellow}]}>
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
                <View style={[style.resultContainer, style.horizontalPadding20, screenStyle.grow1]}>
                    <View style={[{marginVertical: 30}, screenStyle.grow1]}>
                        <Text style={[style.mediumHeader]}>Total amount</Text>
                        <Text
                            style={[style.mainResultNumeric]}>{total}</Text>
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
        </View>
    )
};

export default IncomeCalc;
