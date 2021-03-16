import React, {useState} from 'react';
import {KeyboardAvoidingView, FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, View, } from '../components/Themed';




export default function HelpCenterScreen(){

    const [people,setPeople] = useState([
        {name: 'Hospital San Juan Capestrano', id: '1'},
        {name : 'Beachway Therapy Center', id:'2'},
        {name : 'Hogar Crea Coamo Varones', id:'3'},
        {name: 'Hogar Crea Cayey', id:'4'},
        {name: 'Hogar Crea San Sebastian', id: '5'},
        {name: 'Hogar Crea Las Marias', id: '6'},
        {name: 'Hogar Crea San Humacao', id: '7'},
        {name: 'Hogar Crea Gurabo', id: '8'},
        {name: 'Hogar Crea Corozal', id: '9'},
        {name: 'Hogar Crea La Quinta', id: '10'},
        {name: 'Hogar Crea Comerio', id: '11'},
        {name: 'Hogar Crea Naranjito', id: '12'},
        {name: 'Hogar Crea Manati Varones', id: '13'},
        {name: 'Hogar Crea Coamo Damas', id: '14'},
        {name: 'Hogar Crea Yabucoa', id: '15'},
        {name: 'Hogar Crea Sabana Catano', id: '16'},
        {name: 'Hogar Crea Guaynabo Adultos', id: '17'},
        {name: 'Casa Luz y Vida Incorporated', id: '18'},
        {name: 'Silo Mision Christiana Incorporated', id: '19'},
        {name: 'Hogar Jesus Incorporated', id: '20'},








    ])

    const  navigation = useNavigation();

    const onButtonPress = () => {
        //navigation.navigate('ProfileSettings');
    }
    const onButtonPress2 = () => {
        //navigation.navigate('TabTwoScreen');
    }

    return(

        <View style={styles.container}>

            <FlatList
                numColumns={1}
                keyExtractor={(item)=>item.id}
                data={people}
                renderItem={({item})=> (
                    <Text style={styles.item}>{item.name}</Text>
                )}
                />


        </View>





    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {


    },
    headings:{
        //margin: "1em 0 0.5em 0",
        color: '#343434',
        fontSize: 22,
        lineHeight: 40,
        fontWeight: 'normal',
        textTransform: 'uppercase',
        fontFamily: 'Orienta',
        letterSpacing: 1,
        fontStyle: 'italic',

    },
    customInput:{
        borderWidth: 0,
        borderColor: 'black',
        borderStyle: 'solid',

        backgroundColor: "#f2f2f2",
        padding: 12,
        borderRadius: 3,
        width: 250,

        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'black',

        //alignSelf: 'stretch',
        //height: 40,
        marginBottom: 15,
        //color: '#fff',
        //borderBottomWidth: 1,




    },

    customButton:{
        alignItems: 'center',
        //userSelect: 'none',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        flexShrink: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        fontWeight: "500",
        backgroundColor: 'rgba(235, 87, 87, 0.03)',
        color: 'rgb(0, 128, 128)',
        borderWidth: 1,
        borderColor: 'rgb(0, 128, 128)',
        borderStyle: 'solid',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        width: '100%',
        marginTop: 6,
        marginBottom: 12,
        //cursor: 'pointer'

    },
    keyboard: {
        marginBottom: 100,
    },

    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'rgb(0, 128, 128)',
        fontSize: 24,
        marginHorizontal:10,

    },
});
