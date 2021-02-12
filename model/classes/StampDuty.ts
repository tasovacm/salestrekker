import {AustralianState} from "../enums/AustralianState";
import {TransactionType} from "../enums/TransactionType";
import {PropertyType} from "../enums/PropertyType";
import {PaymentFrequencyType} from "../enums/PaymentFrequencyType";

export class StampDuty {
    isFhog: boolean;
    postcode: number;
    propertyType: PropertyType;
    state: AustralianState;
    states: AustralianState[];
    transactionType: TransactionType;
    value: number
}
export class StampDutyValues {

    key:string = "28e76efc-867e-40fd-9e09-cadf4674360f";
    state: AustralianState;
    fhog: boolean;
    stampDuty: number;
    feeLandTransfer: number;
    feeMortgageRegistration: number;
    feeMortgageDischargeCosts: number;

}
export class IncomeResource {
    grossSalary: number;
    grossSalaryFrequency: PaymentFrequencyType;
}
