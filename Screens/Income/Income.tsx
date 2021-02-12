import * as React from 'react'
import {useState} from 'react'
import {ScrollView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {style} from "../../components/style/ComponentStyle";
import PickerComponent from "../../components/Picker";
import {screenStyle} from "../style/screenStyle";
import Input from "../../components/Input";
import {PaymentFrequencyType} from "../../model/enums/PaymentFrequencyType";
import {PaymentFrequencyTypeString} from "../../model/EnumString/PaymentFrequencyTypeString";
import {Picker} from "@react-native-picker/picker";
import Button from "../../components/Button";
import {colors} from "../style/colors";
import {formatter} from "../../core/Util/formatter";
import {IncomeResource} from "../../model/classes/StampDuty";

type resource = {
    grossSalary: number;
    grossSalaryFrequency: PaymentFrequencyType;
};

enum APPLICANT {
    APPLICANT_1 = 'APPLICANT_1',
    APPLICANT_2 = 'APPLICANT_2'

}

const Income = ({navigation}) => {

    const [frequency, setFrequency] = useState<PaymentFrequencyType>(PaymentFrequencyType.MONTHLY);
    const [income, setIncome] = useState<number>();
    const [incomeFormatted, setIncomeFormatted] = useState<string>();
    const [activeAplicant, setActiveAplicant] = useState<APPLICANT>(APPLICANT.APPLICANT_1);
    const [totalFrequency, setTotalFrequency] = useState<PaymentFrequencyType>(PaymentFrequencyType.WEEKLY);
    const pickerItems = () => {
        let array = [];
        for (const item in PaymentFrequencyType) {
            if (PaymentFrequencyType.hasOwnProperty(item)) {
                array.push(
                    <Picker.Item
                        key={PaymentFrequencyType[item]}
                        label={PaymentFrequencyTypeString[PaymentFrequencyType[item]]}
                        value={item}
                    />,
                );
            }
        }
        return array;
    };
    let createResource: () => resource;
    createResource = () => {
        let resource = new IncomeResource();
        resource.grossSalary = income;
        resource.grossSalaryFrequency = frequency;
        return resource;
    };

    const getTaxYear = () => {
        let date = new Date();
        let month = date.getMonth();
        return month > 6 ? date.getFullYear() : date.getFullYear() - 1
    };

    const formData = () => {
        let array = [];
        array.push('Income $' + formatter.separated(income));
        array.push(PaymentFrequencyTypeString[frequency]);
        array.push('Tax year ' + getTaxYear());
        return {array}
    };

    let multiplier: () => number;
    multiplier = () => {
        let x;
        switch (frequency) {
            case PaymentFrequencyType.ANNUALLY :
                x = 1;
                break;
            case PaymentFrequencyType.SEMIANNUAL :
                x = 2;
                break;
            case PaymentFrequencyType.QUARTERLY:
                x = 4;
                break;
            case PaymentFrequencyType.MONTHLY:
                x = 12;
                break;
            case PaymentFrequencyType.FORTNIGHTLY :
                x = 26;
                break;
            case PaymentFrequencyType.WEEKLY:
                x = 52;
                break
        }
        return income * x;
    };
    let divisor: () => string;
    divisor = () => {
        let x;
        switch (totalFrequency) {
            case PaymentFrequencyType.ANNUALLY :
                x = 1;
                break;
            case PaymentFrequencyType.SEMIANNUAL :
                x = 2;
                break;
            case PaymentFrequencyType.QUARTERLY:
                x = 4;
                break;
            case PaymentFrequencyType.MONTHLY:
                x = 12;
                break;
            case PaymentFrequencyType.FORTNIGHTLY :
                x = 26;
                break;
            case PaymentFrequencyType.WEEKLY:
                x = 52;
                break
        }
        return (multiplier() / x).toFixed(2);
    };

    return (

        <ScrollView style={[screenStyle.grow1, style.horizontalPadding20]}
                    contentContainerStyle={{flexGrow: 1}}>
            <View style={{flexDirection: "row", borderBottomWidth: StyleSheet.hairlineWidth, paddingBottom: 10}}>
                <TouchableOpacity><Text style={{
                    marginRight: 10,
                    fontSize: 18,
                    color: activeAplicant === 'APPLICANT_1' ? '#000' : colors.darkGrey
                }}>Applicant 1</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{
                    marginRight: 10,
                    fontSize: 18,
                    color: activeAplicant === 'APPLICANT_2' ? '#000' : colors.darkGrey
                }}>Applicant 2</Text></TouchableOpacity>
            </View>
            <View style={style.separatedRow}>
                <View style={style.pickerWrapper}>
                    <Input
                        label={'Income'}
                        keyboard={'numeric'}
                        inputType={'currency'}
                        prefix={'$'}
                        value={incomeFormatted}
                        onChangeText={(e: formatObject) => {
                            setIncome(e.value);
                            setIncomeFormatted(e.formatted)
                        }}
                    />
                </View>
                <PickerComponent
                    label={'Frequency'}
                    values={PaymentFrequencyType}
                    string={PaymentFrequencyTypeString}
                    value={frequency}
                    onChange={(e) => {
                        setFrequency(e)
                    }}
                />
            </View>
            <View style={style.marginTop20}>
                <Text style={{fontWeight: "bold", fontSize: 24}}>Total gross income</Text>
                <View style={[style.separatedRow, {alignItems: 'center'}]}>
                    <View style={[style.pickerWrapper]}>
                        <Picker mode={'dropdown'}
                                onValueChange={(e: PaymentFrequencyType) => setTotalFrequency(e)}
                                selectedValue={totalFrequency}
                        >
                            {pickerItems()}
                        </Picker>
                    </View>
                    <View>
                        <Text style={[style.textInput, {
                            textAlign: 'left',
                            color: colors.mainBlue
                        }]}>{income && '$' + formatter.separated(divisor())}</Text>
                    </View>
                </View>
            </View>
            <View style={style.marginTop20}>
                <Button
                    text={"Calculate"}
                    backgroundColor={colors.mainYellow}
                    fontSize={25}
                    onPress={() => {
                        if (!income) {
                            alert("Enter Income!");
                            return
                        }
                        let tags = formData();
                        let params = createResource();
                        navigation.navigate('Income Calc', {params, tags: tags})
                    }}
                />
            </View>
        </ScrollView>

    )
};

export default Income;
