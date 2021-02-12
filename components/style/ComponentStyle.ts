import {StyleSheet} from 'react-native';
import {colors} from '../../Screens/style/colors';

export const style = StyleSheet.create ( {
	horizontalPadding20 : {
		paddingHorizontal : 20 ,
	} ,
	mainButton : {
		flexDirection : 'row' ,
		flex : 1 ,
		backgroundColor : colors.mainBlue ,
		padding : 20 ,
		borderTopLeftRadius : 20 ,
		borderTopRightRadius : 20 ,
		borderBottomLeftRadius : 50 ,
		borderBottomRightRadius : 20 ,
		minHeight : 100 ,
		alignItems : 'center' ,
		justifyContent : 'center' ,
		marginTop : 20 ,
	} ,
	mainButtonText : {
		flexShrink : 1 ,
		color : 'white' ,
		fontSize : 18 ,
		alignItems : 'center' ,
		textAlign : 'center' ,
	} ,
	marginTop20 : {
		marginTop : 20 ,
	} ,
	mainHeader : {
		fontSize : 36 ,
		fontWeight : '900' ,
	} ,
	subHeader : {
		fontSize : 18 ,
		width : '80%' ,
	} ,
	arrowBack : {
		paddingHorizontal : 20 ,
	} ,
	textInputWrapper : {
		flexDirection : 'row' , flex : 1 ,
		borderWidth : StyleSheet.hairlineWidth ,
		borderRadius : 50 , alignItems : 'center',
	} ,
	textInput : {
		//flex : 1 ,
		paddingHorizontal : 10 ,
		fontSize : 24,
	} ,
	inputLabel : {
		fontSize : 24 ,
		marginBottom : 10 ,
		flex : 1 ,
	} ,
	picker : {
		borderWidth : StyleSheet.hairlineWidth ,
		borderRadius : 50 ,
		paddingHorizontal : 10 ,
		flex : 1 ,
	} ,
	pickerWrapper : {
		flex : 1 ,
		maxWidth : '47%' ,
	} ,
	separatedRow : {
		flexDirection : 'row' ,
		justifyContent : 'space-between' ,
	} ,
	switchContainer : {
		flexDirection : 'row' ,
		justifyContent : 'space-between' ,
	} ,
	defaultButtonWrapper : {
		backgroundColor : 'yellow' ,
		flexDirection : 'row' ,
		justifyContent : 'center' ,
		alignItems : 'center' ,
		paddingVertical : 20 ,
	} ,
	tagText : {
		backgroundColor : '#ffe2aa' ,
		paddingVertical : 10 ,
		paddingHorizontal : 15 ,
		marginRight : 5 ,
		marginVertical : 5 ,
		borderRadius : 50 ,
		textAlign : 'center' ,
		flexShrink : 1 ,
		fontSize : 16 ,
	} ,
	activityIndicatorContainer : {
		justifyContent : 'center' ,
		flex : 1 ,
		backgroundColor : 'white' ,
		borderTopLeftRadius : 50 ,
		borderTopRightRadius : 50 ,
	} ,
	resultContainer : {
		justifyContent : 'space-around' ,
		flex : 1 ,
		backgroundColor : 'white' ,
		borderTopLeftRadius : 50 ,
		borderTopRightRadius : 50 ,
	} ,
	mediumHeader : {
		fontSize : 24 ,
		textAlign : 'center' ,
		fontWeight : 'bold' ,
	} ,
	mainResultNumeric : {
		fontSize : 36 ,
		textAlign : 'center' ,
		fontWeight : 'bold' ,
		color: colors.mainBlue
	} ,
	cardResultNumeric : {
		fontWeight : 'bold' ,
		fontSize : 22 ,
		color : colors.mainBlue,
	} ,
	stampCard : {
		flex: 1,
		justifyContent: 'space-around',
		backgroundColor : '#f6f5fb' ,
		borderTopRightRadius : 20 ,
		borderTopLeftRadius : 20 ,
		borderBottomRightRadius : 20 ,
		borderBottomLeftRadius : 50 ,
		padding : 20,
	},
} );
