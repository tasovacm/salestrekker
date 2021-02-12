import * as React from "react";
import {useEffect, useState} from "react";
import ScreenHeader from '../../components/ScreenHeader'
import {ActivityIndicator, Text, View} from "react-native";
import {screenStyle} from '../style/screenStyle';
import {colors} from '../style/colors';
import {style} from '../../components/style/ComponentStyle';
import Button from "../../components/Button";
import {api} from "../../core/api/api";
import PriceTagCard from "../../components/PriceTagCard";
import {formatter} from "../../core/Util/formatter";

let StampDutyCalc: ({route, navigation}: { route: any; navigation: any }) => any;

StampDutyCalc = ({route, navigation}) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [stampDuty, setStampDuty] = useState<string>();
    const [feeLandTransfer, setFeeLandTransfer] = useState<string>();
    const [feeMortgageRegistration, setFeeMortgageRegistration] = useState<string>();
    const [feeMortgageDischargeCosts, setFeeMortgageDischargeCosts] = useState<string>();


    const getTags = () => {
        let array = [];
        route.params.tags.array.map(item => {
            array.push(<Text
                key={item}
                style={style.tagText}>{item}</Text>)
        });
        return array
    };

    useEffect(() => {
            api.stampDuty(route.params.apiParams)
                .then(response => {
                    response.data.globals.map((item) => {
                            if (item.estimate.length > 0) {
                                item.estimate.map(data => {
                                    formatter.toCurrency(data.stampDuty).then((res: string) => setStampDuty(res));
                                    formatter.toCurrency(data.feeLandTransfer).then(res => setFeeLandTransfer(res));
                                    formatter.toCurrency(data.feeMortgageRegistration).then(res => setFeeMortgageRegistration(res));
                                    formatter.toCurrency(data.feeMortgageDischargeCosts).then(res => setFeeMortgageDischargeCosts(res));
                                })
                            }
                        }
                    )
                })
                .then(() => {
                    setLoading(false);
                });
        }, []
    )
    ;

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
                <View style={[style.resultContainer, style.horizontalPadding20]}>
                    <View style={{marginVertical: 20}}>
                        <Text style={[style.mediumHeader]}>Total amount</Text>
                        <Text
                            style={[style.mainResultNumeric]}>{stampDuty}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                        <PriceTagCard header1={"Fee"} width={"31%"} header2={"Land Transfer"} value={feeLandTransfer}/>
                        <PriceTagCard header1={"Fee"} width={"31%"} header2={"Discharges"} value={feeMortgageRegistration}/>
                        <PriceTagCard header1={"Costs"} width={"31%"} header2={"Discharges"} value={feeMortgageDischargeCosts}/>
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
}
;

export default StampDutyCalc
