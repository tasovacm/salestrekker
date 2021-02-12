import * as React from 'react';
import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {style} from '../../components/style/ComponentStyle';
import ScreenHeader from '../../components/ScreenHeader';
import {screenStyle} from '../style/screenStyle';
import Input from '../../components/Input';
import PickerComponent from '../../components/Picker';
import {LoanRepaymentType} from '../../model/enums/LoanRepaymentType';
import {LoanRepaymentTypeString} from "../../model/EnumString/LoanRepaymentTypeString";
import {LoanRateType} from "../../model/enums/RateType";
import {LoanRateTypeString} from "../../model/EnumString/LoanRateTypeString";
import {LoanPropertyUseType} from "../../model/enums/LoanPropertyUseType";
import {LoanPropertyUseTypeString} from "../../model/EnumString/LoanPropertyUseTypeString";
import SwitchComponent from "../../components/Switch";
import Button from "../../components/Button";
import {colors} from '../style/colors'

const ProductSearch = ({navigation}) => {
    const [loanRepaymentType, setLoanRepaymentType] = useState<LoanRepaymentType>(LoanRepaymentType.PI);
    const [loanRateType, setLoanRateType] = useState<LoanRateType>(LoanRateType.FIXED);
    const [loanPropertyUse, setLoanPropertyUse] = useState<LoanPropertyUseType>(LoanPropertyUseType.ANY);
    const [offset, setOffset] = useState<boolean>(false);

    return (
        <ScrollView style={[screenStyle.grow1, style.horizontalPadding20]}
                    contentContainerStyle={{justifyContent: 'center'}}
        >
            <ScreenHeader
                mainText={'Lenders'}
                subText={'You can edit at any time the information of your serch'}
            />
            <Input label={'Loan amount'}
                keyboard={'numeric'}
            />
            <Input label={'LVR'}
                   keyboard={'numeric'}
            />
            <View style={style.separatedRow}>
                <PickerComponent
                    value={loanRepaymentType}
                    string={LoanRepaymentTypeString}
                    onChange={(e) => {
                        setLoanRepaymentType(e);
                    }}
                    label={'Repayment Type'}
                    values={LoanRepaymentType}
                />
                <PickerComponent
                    label={'Rate Type'}
                    value={loanRateType}
                    string={LoanRateTypeString}
                    onChange={(e) => {
                        setLoanRateType(e);
                    }}
                    values={LoanRateType}
                />
            </View>
            <PickerComponent
                label={'Property Use'}
                value={loanPropertyUse}
                string={LoanPropertyUseTypeString}
                onChange={(e) => {
                    setLoanPropertyUse(e);
                }}
                values={LoanPropertyUseType}
            />
            <SwitchComponent
                label={'Offset'}
                onChange={() => setOffset(!offset)}
                value={offset}
            />
            <Button
                text={'Search'}
                icon={'search1'}
                color={'#fff'}
                backgroundColor={colors.mainYellow}
                fontSize={25}
            />
        </ScrollView>
    );
};

export default ProductSearch;
