import {LoanPropertyUseType} from "../enums/LoanPropertyUseType";
import {TransactionType} from "../enums/TransactionType";
import {AustralianState} from "../enums/AustralianState";
import {OwnershipType} from "../enums/OwnershipType";

export class LMI{
    lenders: string[] = [];
    balance : number;
    loan : number;
    value: number;
    useFhog: boolean;
    isSelfEmployment: boolean;
    ownershipType : OwnershipType;
    transactionType : TransactionType;
    state: AustralianState;
    abbr: String
}
