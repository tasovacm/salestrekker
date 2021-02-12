import * as React from 'react'
import {Text, View} from 'react-native';
import { Switch } from 'react-native-switch';

import {colors} from '../Screens/style/colors'
import {style} from './style/ComponentStyle';


const SwitchComponent = (props) => {

    return (
        <View style={[style.switchContainer, style.marginTop20]}>
            <Text style={style.inputLabel}>{props.label}</Text>
            <Switch
                value={props.value}
                onValueChange={props.onChange}
                disabled={false}
                circleSize={25}
                barHeight={29}
                circleBorderWidth={0}
                backgroundActive={colors.mainYellow}
                backgroundInactive={'gray'}
                circleActiveColor={'#fff'}
                circleInActiveColor={'#fff'}
                changeValueImmediately={true}
                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                switchWidthMultiplier={2.2} // multipled by the `circleSize` prop to calculate total width of the Switch
                switchBorderRadius={30}
                />
        </View>
    )
};

export default SwitchComponent;
