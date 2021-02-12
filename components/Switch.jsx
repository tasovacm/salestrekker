"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_switch_1 = require("react-native-switch");
var colors_1 = require("../Screens/style/colors");
var ComponentStyle_1 = require("./style/ComponentStyle");
var SwitchComponent = function (props) {
    return (<react_native_1.View style={[ComponentStyle_1.style.switchContainer, ComponentStyle_1.style.marginTop20]}>
            <react_native_1.Text style={ComponentStyle_1.style.inputLabel}>{props.label}</react_native_1.Text>
            <react_native_switch_1.Switch value={props.value} onValueChange={props.onChange} disabled={false} circleSize={25} barHeight={29} circleBorderWidth={0} backgroundActive={colors_1.colors.mainYellow} backgroundInactive={'gray'} circleActiveColor={'#fff'} circleInActiveColor={'#fff'} changeValueImmediately={true} innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
     renderActiveText={false} renderInActiveText={false} switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
     switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
     switchWidthMultiplier={2.2} // multipled by the `circleSize` prop to calculate total width of the Switch
     switchBorderRadius={30}/>
        </react_native_1.View>);
};
exports.default = SwitchComponent;
