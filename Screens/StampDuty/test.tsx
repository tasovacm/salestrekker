import * as React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function SearchScreen() {
    const [searchText, setSearchText] = React.useState('');
    const [searchData, setSearchData] = React.useState([]);
    React.useEffect(() => {
        if (searchText !== "") {
            fetch(`https://morning-star.p.rapidapi.com/market/v2/auto-complete?q=${searchText}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "sensitivedata",
                    "x-rapidapi-host": "morning-star.p.rapidapi.com"
                }
            })
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                console.log(data.results);
                setSearchData(data.results);
            });
        }
    }, [searchText]);

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setSearchText(text)}
                value={searchText}
            />
            {
                searchData.map((stock, index) => (
                    <Text key={index}>{stock.symbol}</Text>
                ))
            }
        </View>
    );
}
