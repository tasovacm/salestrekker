export const queries = {
    stampDuty: `query(
                      $states: [AustralianState!]
                      $state: AustralianState
                      $postcode: Float
                      $value: Float
                      $transactionType: TransactionType
                      $propertyType: PropertyType
                      $isFhog: Boolean
                    ) {
                      globals(countryCode: "AU", states: $states) {
                        id
                        abbr
                        state
                        estimate(
                          params: {
                            key: "28e76efc-867e-40fd-9e09-cadf4674360f"
                            state: $state
                            postalCode: $postcode
                            useFhog: $isFhog
                            income: 0
                            securityValueStampDuty: $value
                            securityValueFhog: $value
                            securityValueFees: $value
                            dependents: 0
                            transactionType: $transactionType
                            propertyStatusStampDuty: $propertyType
                            propertyStatusFhog: $propertyType
                            propertyStatusFees: $propertyType
                            ownershipType: OWNER_OCCUPIED
                          }
                        ) {
                          key
                          state
                          fhog
                          stampDuty
                          feeLandTransfer
                          feeMortgageRegistration
                          feeMortgageDischargeCosts
                        }
                      }
                    }`,
    getAllLenders: `query($search: String) {
                      lenders(visibility: DEV, search: $search) {
                        id
                        abbr
                        name
                        isActive
                      }
                    }`,
    income: `query($grossSalary: Float, $grossSalaryFrequency: PaymentFrequencyType){
              financeIncomeEstimate(
                params:{
                  countryCode: "AU"
                  workflowType: CONVEYANCING
                  incomes:[
                    {
                      idContact:"28e76efc-867e-40fd-9e09-cadf4674360f"
                      payg:[{
                        grossSalary: $grossSalary
                        grossSalaryFrequency: $grossSalaryFrequency
                      }]
                    }
                  ]
                  
                }
              )
              {
                idContact
                totalNetIncome
                totalIncome
              }
            }`
};

