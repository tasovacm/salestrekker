import * as React from 'react';
import Search from '../../components/Search';
import {useState} from "react";
import {api} from "../../core/api/api";

const FindLender = ({navigation, route}) => {
    const [value, setValue] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [lenders, setLenders] = useState<Array<Lender>>([]);
    return(
        <Search
            onChange={(e: string) => {
                setLoading(true);
                setValue(e);
                api.getLenders({"search": e}).then(res => setLenders(res.data.lenders)).then(()=>setLoading(false));
                console.log(lenders);
            }}
            value={value}
            result={lenders}
            loading={loading}
            onSelect={(lender)=>{ navigation.navigate('Lenders Mortgage Insurance', {lender})}}
        />
    )
};

export default FindLender;
