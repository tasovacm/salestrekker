"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ScreenHeader_1 = require("../../components/ScreenHeader");
var react_native_1 = require("react-native");
var screenStyle_1 = require("../style/screenStyle");
var colors_1 = require("../style/colors");
var ComponentStyle_1 = require("../../components/style/ComponentStyle");
var Button_1 = require("../../components/Button");
var api_1 = require("../../api/api");
var react_1 = require("react");
var StampDutyCalc = function (_a) {
    var route = _a.route, navigation = _a.navigation;
    var _b = react_1.useState(), values = _b[0], setValues = _b[1];
    var _c = react_1.useState(true), loading = _c[0], setLoading = _c[1];
    var getTags = function () {
        var array = [];
        route.params.tags.array.map(function (item) {
            array.push(<react_native_1.Text key={item} 
            // @ts-ignore
            style={ComponentStyle_1.style.tagText}>{item}</react_native_1.Text>);
        });
        return array;
    };
    react_1.useEffect(function () {
        api_1.api.stampDuty(route.params.apiParams).then(function (response) {
            response.data.globals.map(function (item) {
                if (item.estimate.length > 0) {
                    setValues(item.estimate[0]);
                }
            });
        }).then(function () {
            setLoading(false);
        });
        console.log(values);
    }, []);
    return (<react_native_1.View style={[screenStyle_1.screenStyle.grow1, { backgroundColor: colors_1.colors.mainYellow }]}>
            <react_native_1.View style={[ComponentStyle_1.style.horizontalPadding20]}>
                <ScreenHeader_1.default mainText={'Here is what we found'} subText={'You can edit at any time information of your search'}/>
            </react_native_1.View>
            <react_native_1.View style={[ComponentStyle_1.style.horizontalPadding20, { flexDirection: 'row', flexWrap: 'wrap' }]}>
                {getTags()}
            </react_native_1.View>
            {loading ? <react_native_1.View style={ComponentStyle_1.style.activityIndicatorContainer}><react_native_1.ActivityIndicator size="large" color="#00ff00"/></react_native_1.View> :
        <react_native_1.View style={[ComponentStyle_1.style.resultContainer, ComponentStyle_1.style.horizontalPadding20]}>
                    <react_native_1.View>
                        <react_native_1.Text style={[ComponentStyle_1.style.mediumHeader]}>Total amount</react_native_1.Text>
                        <react_native_1.Text style={[ComponentStyle_1.style.mainResultNumeric]}>${values.stampDuty}</react_native_1.Text>
                    </react_native_1.View>
                    <react_native_1.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <react_native_1.View style={{
            backgroundColor: '#f6f5fb',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 50,
            padding: 20
        }}>
                            <react_native_1.Text style={{ fontSize: 16 }}>Fee</react_native_1.Text>
                            <react_native_1.Text style={{ fontWeight: "bold", fontSize: 16 }}>LandTransfer</react_native_1.Text>
                            <react_native_1.Text style={{
            fontWeight: "bold",
            fontSize: 18,
            color: colors_1.colors.mainBlue
        }}>${values.feeLandTransfer}</react_native_1.Text>
                        </react_native_1.View>
                        <react_native_1.View style={{
            backgroundColor: '#f6f5fb',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 50,
            padding: 20
        }}>
                            <react_native_1.Text style={{ fontSize: 16 }}>Fee</react_native_1.Text>
                            <react_native_1.Text style={{ fontWeight: "bold", fontSize: 16 }}>Discharges</react_native_1.Text>
                            <react_native_1.Text style={{
            fontWeight: "bold",
            fontSize: 18,
            color: colors_1.colors.mainBlue
        }}>${values.feeMortgageRegistration}</react_native_1.Text>
                        </react_native_1.View>
                        <react_native_1.View style={{
            backgroundColor: '#f6f5fb',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 50,
            padding: 20
        }}>
                            <react_native_1.Text style={{ fontSize: 16 }}>Costs</react_native_1.Text>
                            <react_native_1.Text style={{ fontWeight: "bold", fontSize: 16 }}>Discharges</react_native_1.Text>
                            <react_native_1.Text style={{
            fontWeight: "bold",
            fontSize: 18,
            color: colors_1.colors.mainBlue
        }}>${values.feeMortgageDischargeCosts}</react_native_1.Text>
                        </react_native_1.View>
                    </react_native_1.View>
                    <Button_1.default text={'Back'} color={'#000'} backgroundColor={colors_1.colors.mainYellow} fontSize={24} icon={'leftcircleo'} onPress={function () { return navigation.goBack(); }}/>
                </react_native_1.View>}
        </react_native_1.View>);
};
exports.default = StampDutyCalc;
