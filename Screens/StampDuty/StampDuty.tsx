import {ScrollView, View} from "react-native";
import SwitchComponent from "../../components/Switch";
import Input from "../../components/Input";
import {screenStyle} from '../style/screenStyle';
import {colors} from '../style/colors';
import {style} from '../../components/style/ComponentStyle';

import * as React from "react";
import {useState} from "react";
import PickerComponent from "../../components/Picker";
import {PropertyType} from "../../model/enums/PropertyType";
import {PropertyTypeString} from "../../model/EnumString/PropertyTypeString";
import {TransactionType} from "../../model/enums/TransactionType";
import {TransactionTypeString} from "../../model/EnumString/TransactionTypeString";
import {AustralianState} from "../../model/enums/AustralianState";
import Button from "../../components/Button";
import {formatter} from "../../core/Util/formatter";

const StampDuty = ({navigation}) => {
    const [firstHome, setFirstHome] = useState<boolean>(false);
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [formattedLoanAmount, setFormattedLoanAmount] = useState<number>(0);
    const [propertyType, setPropertyType] = useState<PropertyType>(PropertyType.CONSTRUCTION);
    const [transactionType, setTransactionType] = useState<TransactionType>(TransactionType.EQUITY_RELEASE);
    const [securityState, setSecurityState] = useState<AustralianState>(AustralianState.ACT);
    const [postCode, setPostCode] = useState<number>();


    const getFees = () => {
        return {
            isFhog: firstHome,
            postcode: postCode,
            propertyType: propertyType,
            state: securityState,
            states: [securityState],
            transactionType: transactionType,
            value: loanAmount
        };
    };

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const formData = () => {
        let array = [];
        array.push('Security value $' + formatter.separated(loanAmount));
        array.push(PropertyTypeString[propertyType]);
        array.push(TransactionTypeString[transactionType]);
        array.push(securityState);
        return {array}
    };
    return (
        <ScrollView style={[screenStyle.grow1, style.horizontalPadding20]}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}>
            <View>
                <SwitchComponent
                    value={firstHome}
                    onChange={() => setFirstHome(!firstHome)}
                    label={"First home buyer"}
                />
                <Input label={'Loan amount'}
                       keyboard={'numeric'}
                       inputType={'currency'}
                       value={formattedLoanAmount}
                       prefix={'$'}
                       onChangeText={(e) => {
                           setLoanAmount(e.value);
                           setFormattedLoanAmount(e.formatted)
                       }}
                />
                <View style={style.separatedRow}>
                    <PickerComponent
                        label={'Security type'}
                        values={PropertyType}
                        string={PropertyTypeString}
                        onChange={(e) => {
                            setPropertyType(e);
                        }}
                        value={propertyType}
                    />
                    <PickerComponent
                        label={'Transaction type'}
                        values={TransactionType}
                        string={TransactionTypeString}
                        onChange={(e) => {
                            setTransactionType(e);
                        }}
                        value={transactionType}
                    />
                </View>
                <View style={style.separatedRow}>
                    <PickerComponent
                        label={'Security state'}
                        values={AustralianState}
                        onChange={(e) => {
                            setSecurityState(e);
                        }}
                        value={securityState}
                    />
                    <View style={style.pickerWrapper}>
                        <Input
                            label={'Postcode'}
                            keyboard={'numeric'}
                            value={!!postCode ? postCode.toString() : ''}
                            onChangeText={(e) => setPostCode(e)}
                        />
                    </View>
                </View>
            </View>
            <View>
                <Button
                    text={"Calculate"}
                    backgroundColor={colors.mainYellow}
                    fontSize={25}
                    color={'#000'}
                    onPress={() => {
                        let params = formData();
                        if(!postCode){
                            alert("Enter Postcode!");
                            return
                        }else if(!loanAmount){
                            alert("Enter Loan amount!");
                            return
                        }
                        let apiParams = getFees();
                        navigation.navigate('Stamp Duty Calc', {tags: params, apiParams})
                    }}
                />
            </View>
        </ScrollView>
    )
};

export default StampDuty
