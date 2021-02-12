import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import SwitchComponent from '../../components/Switch';
import PickerComponent from '../../components/Picker';
import {style} from '../../components/style/ComponentStyle';
import {screenStyle} from '../style/screenStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {colors} from '../style/colors';
import {AustralianState} from '../../model/enums/AustralianState';
import {TransactionType} from "../../model/enums/TransactionType";
import {TransactionTypeString} from "../../model/EnumString/TransactionTypeString";
import {LMI} from "../../model/classes/LMI";
import {OwnershipType} from "../../model/enums/OwnershipType";
import {OwnershipTypeString} from "../../model/EnumString/OwnershipTypeString";
import {formatter} from "../../core/Util/formatter";
import {PropertyTypeString} from "../../model/EnumString/PropertyTypeString";


const LendersMortgageInsurance = ({navigation, route}) => {
    const [firstHome, setFirstHome] = useState<boolean>(false);
    const [selfEmployed, setSelfEmployed] = useState<boolean>(false);
    const [loanPropertyUse, setLoanPropertyUse] = useState<OwnershipType>(OwnershipType.OWNER_OCCUPIED);
    const [loanTransactionType, setLoanTransactionType] = useState<TransactionType>(TransactionType.PURCHASE);
    const [state, setState] = useState<AustralianState>(AustralianState.ACT);
    const [value, setValue] = useState<number>();
    const [formattedValue, setFormattedValue] = useState<string>();
    const [existingLoan, setExistingLoan] = useState<number>();
    const [formattedExistingLoan, setFormattedExistingLoan] = useState<string>();
    const [newLoan, setNewLoan] = useState<number>();
    const [formattedNewLoan, setFormattedNewLoan] = useState<string>();
    const [lender, setLender] = useState<Lender>();


    console.log(route.params);

    useEffect(() => {
        // Update the document title using the browser API
        route.params &&
        setLender(route.params.lender)
    }, [route]);

    const createResource = () => {
        let resource = new LMI();
        resource.useFhog = firstHome;//
        resource.abbr = lender.abbr;//
        resource.balance = existingLoan;//
        resource.isSelfEmployment = selfEmployed;//
        resource.lenders.push(lender.id);//
        resource.loan = newLoan;//
        resource.ownershipType = loanPropertyUse;//
        resource.transactionType = loanTransactionType;//
        resource.value = value;//
        resource.state = state;
        return resource;

    };

    const formData = () => {
        let array = [];
        array.push('Security value $' + formatter.separated(value));
        array.push(OwnershipTypeString[loanPropertyUse]);
        array.push(TransactionTypeString[loanTransactionType]);
        array.push(state);
        array.push(lender.name);
        return {array}
    };
    return (

        <ScrollView style={[screenStyle.grow1, style.horizontalPadding20]}
                    contentContainerStyle={{justifyContent: 'center'}}
        >
            <SwitchComponent
                value={firstHome}
                onChange={() => setFirstHome(!firstHome)}
                label={"First home buyer"}
            />
            <SwitchComponent
                value={selfEmployed}
                onChange={() => setSelfEmployed(!selfEmployed)}
                label={'Self employed'}
            />
            <View style={style.separatedRow}>
                <PickerComponent
                    string={OwnershipTypeString}
                    label={'Purpose'}
                    values={OwnershipType}
                    onChange={(e: OwnershipType) => {
                        setLoanPropertyUse(e);
                    }}
                    value={loanPropertyUse}
                />
                <PickerComponent
                    label={'Loan Type'}
                    string={TransactionTypeString}
                    values={TransactionType}
                    onChange={(e: TransactionType) => {
                        setLoanTransactionType(e);
                    }}
                    value={loanTransactionType}
                />
            </View>
            <View style={style.separatedRow}>
                <PickerComponent
                    label={'Security State'}
                    values={AustralianState}
                    onChange={(e: AustralianState) => {
                        setState(e);
                    }}
                    value={state}
                />
                <View style={style.pickerWrapper}>
                    <Input
                        label={'Security Value'}
                        prefix={'$'}
                        keyboard={'numeric'}
                        inputType={'currency'}
                        value={formattedValue}
                        onChangeText={(e) => {
                            setValue(e.value);
                            setFormattedValue(e.formatted)
                        }}
                    />
                </View>
            </View>
            <Input
                label={'Existent loan amount'}
                prefix={'$'}
                keyboard={'numeric'}
                inputType={'currency'}
                value={formattedExistingLoan}
                onChangeText={(e: formatObject) => {
                    setExistingLoan(e.value);
                    setFormattedExistingLoan(e.formatted)
                }}
            />
            <Input
                label={'New loan amount'}
                prefix={'$'}
                keyboard={'numeric'}
                inputType={'currency'}
                value={formattedNewLoan}
                onChangeText={(e: formatObject) => {
                    setNewLoan(e.value);
                    setFormattedNewLoan(e.formatted)
                }}
            />
            <View style={[style.separatedRow, { justifyContent: 'center'}]}>
                <Text numberOfLines={1} style={[{ flex: 1, alignItems:'center', lineHeight: 120, fontWeight:'bold', fontSize: 20}]}>{!!lender && lender.name}</Text>
                <Button
                    icon={'rightcircleo'}
                    iconPosition={'left'}
                    text={'Choose lender'}
                    backgroundColor={colors.mainYellow}
                    fontSize={20}
                    borderRadius={10}
                    width={"100%"}
                    onPress={() => navigation.navigate('Find Lender')}
                />
            </View>
            <Button
                text={'Calculate'}
                backgroundColor={colors.mainYellow}
                fontSize={25}
                onPress={()=>{
                    if(!value){
                        alert("Enter security value!")
                        return
                    }
                    if(!lender){
                        alert("Choose lender!")
                        return
                    }
                    let params = createResource();
                    console.log(params);
                    let tags = formData();
                    navigation.navigate('Lenders Mortgage Insurance Calc', {params, tags: tags})
                }}
            />
        </ScrollView>

    );
};

export default LendersMortgageInsurance;
