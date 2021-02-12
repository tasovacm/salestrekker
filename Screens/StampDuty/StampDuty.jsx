"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Switch_1 = require("../../components/Switch");
var Input_1 = require("../../components/Input");
var screenStyle_1 = require("../style/screenStyle");
var colors_1 = require("../style/colors");
var ComponentStyle_1 = require("../../components/style/ComponentStyle");
var React = require("react");
var react_1 = require("react");
var Picker_1 = require("../../components/Picker");
var PropertyType_1 = require("../../model/enums/PropertyType");
var PropertyTypeString_1 = require("../../model/EnumString/PropertyTypeString");
var TransactionType_1 = require("../../model/enums/TransactionType");
var TransactionTypeString_1 = require("../../model/EnumString/TransactionTypeString");
var AustralianState_1 = require("../../model/enums/AustralianState");
var Button_1 = require("../../components/Button");
var StampDuty = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), firstHome = _b[0], setFirstHome = _b[1];
    var _c = react_1.useState(0), loanAmount = _c[0], setLoanAmount = _c[1];
    var _d = react_1.useState(PropertyType_1.PropertyType.CONSTRUCTION), propertyType = _d[0], setPropertyType = _d[1];
    var _e = react_1.useState(TransactionType_1.TransactionType.EQUITY_RELEASE), transactionType = _e[0], setTransactionType = _e[1];
    var _f = react_1.useState(AustralianState_1.AustralianState.ACT), securityState = _f[0], setSecurityState = _f[1];
    var _g = react_1.useState(0), postCode = _g[0], setPostCode = _g[1];
    var getFees = function () {
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
    var apiParams = getFees();
    var formData = function () {
        var array = [];
        array.push('Security value $' + loanAmount);
        array.push(PropertyTypeString_1.PropertyTypeString[propertyType]);
        array.push(TransactionTypeString_1.TransactionTypeString[transactionType]);
        array.push(securityState);
        return { array: array };
    };
    return (<react_native_1.ScrollView style={[screenStyle_1.screenStyle.grow1, ComponentStyle_1.style.horizontalPadding20]} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around' }}>
            <react_native_1.View>
                <Switch_1.default value={firstHome} onChange={function () { return setFirstHome(!firstHome); }} label={"First home buyer"}/>
                <Input_1.default label={'Loan amount'} value={loanAmount.toString()} onChangeText={function (e) { return setLoanAmount(e); }}/>
                <react_native_1.View style={ComponentStyle_1.style.separatedRow}>
                    <Picker_1.default label={'Security type'} values={PropertyType_1.PropertyType} string={PropertyTypeString_1.PropertyTypeString} onChange={function (e) {
        setPropertyType(e);
    }} value={propertyType}/>
                    <Picker_1.default label={'Transaction type'} values={TransactionType_1.TransactionType} string={TransactionTypeString_1.TransactionTypeString} onChange={function (e) {
        setTransactionType(e);
    }} value={transactionType}/>
                </react_native_1.View>
                <react_native_1.View style={ComponentStyle_1.style.separatedRow}>
                    <Picker_1.default label={'Security state'} values={AustralianState_1.AustralianState} onChange={function (e) {
        setSecurityState(e);
    }} value={securityState}/>
                    <react_native_1.View style={ComponentStyle_1.style.pickerWrapper}>
                        <Input_1.default label={'Postcode'} value={postCode.toString()} onChangeText={function (e) { return setPostCode(e); }}/>
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.View>
            <react_native_1.View>
                <Button_1.default text={"Calculate"} backgroundColor={colors_1.colors.mainYellow} fontSize={25} color={'#000'} onPress={function () {
        var params = formData();
        navigation.navigate('Stamp Duty Calc', { tags: params, apiParams: apiParams });
    }}/>
            </react_native_1.View>
        </react_native_1.ScrollView>);
};
exports.default = StampDuty;
