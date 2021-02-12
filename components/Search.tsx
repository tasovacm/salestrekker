import {ScrollView, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity} from "react-native";
import React from "react";
import Input from "./Input";
import {screenStyle} from '../Screens/style/screenStyle'
import {style} from './style/ComponentStyle'
import {useState} from "react";
import {api} from "../core/api/api";
import {colors} from "../Screens/style/colors";


const Search = (props) => {


    const lendersList = () => {
        let array = [];
        props.result.length > 0 && props.result.map(item => {
            array.push(
                <TouchableOpacity key={item.id} style={{
                    backgroundColor: colors.gray,
                    padding: 15,
                    borderRadius: 50,
                    marginVertical: 5,
                }}
                    onPress={()=>props.onSelect(item)}
                >
                    <Text style={{textAlign: 'center'}}>{item.name}</Text>
                </TouchableOpacity>
            )
        });
        if (!props.value) {
            return <Text style={local.searchNotification}>Start typing for serach...</Text>
        }
        if (props.result.length === 0) {
            return <Text style={local.searchNotification}>No result...</Text>
        }
        return array
    };

    return (
        <View style={[screenStyle.grow1, style.horizontalPadding20,]}>
            <View style={{height: 150}}>
                <Input
                    label={'Find Lenders'}
                    onChangeText={props.onChange}
                    value={props.value}
                />
            </View>
            <View style={{flexShrink: 1}}>
                <ScrollView scrollEnabled={true}>
                    {props.loading && <ActivityIndicator/>}
                    {lendersList()}
                </ScrollView>
            </View>
        </View>
    )
};
const local = StyleSheet.create({
    searchNotification: {
        backgroundColor: colors.gray,
        color: colors.darkGrey,
        flex: 1,
        textAlign: 'center',
        paddingVertical: 10,
        marginVertical: 20
    }
})
export default Search;
