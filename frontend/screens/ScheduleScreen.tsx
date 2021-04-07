import * as React from 'react';
import {View} from "../components/Themed";
import {Modal, StyleSheet, Text, TouchableHighlight} from "react-native";
import moment from "moment";
import {useState} from "react";
import DateTimePicker from "react-native-modal-datetime-picker";


export default function ScheduleScreen() {

    const [date, setDate] = useState(moment());
    const [show, setShow] = useState(false);
    const onChange = (e, selectedDate)=>{
        setDate(moment(selectedDate));
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <><View style={styles.container}>
            <Text>Copy paste ScheduleScreen's code here</Text>

            <TouchableHighlight
               activeOpacity={0}
                onPress={()=>setShow(true)}



                >
            <View style={{marginHorizontal:20}}>

                <Text style={styles.textStyle}>{moment().format('MMM-Do-YYYY')}</Text>
                <Modal
                        transparent={true}
                        animationType ="slide"
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={()=> setShow(false)}

                >
                    <View style={{flex:1}}>
                        <TouchableHighlight
                            style={{
                                flex:1,
                                alignItems:'flex-end',
                                flexDirection:'row',
                            }}
                            activeOpacity={1}
                            visible={show}
                            onPress={()=>setShow(false)}
                            >
                            <TouchableHighlight
                                underlayColor={'#FFFFFF'}
                                style={{
                                    flex: 1,
                                    borderTopColor:'#E9E9E9',
                                    borderTopWidth: 1,
                                }}
                                onPress={()=>console.log('datapicker clicked')}
                                >
                                <View style={{
                                    backgroundColor:'#FFFFFF',
                                    height: 256,
                                    overflow:'hidden'
                                }}>
                                    <View style={{marginTop: 20}}>
                                        <DateTimePicker
                                           // onConfirm={}
                                            //onCancel={}
                                            timeZoneOffsetInMinutes={0}
                                            value={new Date(date)}
                                            mode="date"
                                            minimumDate={new Date(moment().subtract(120,'years').format('YYYY-MM-DD'))}
                                            maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                                            onChange={onChange}
                                            //17:18
                                        >

                                        </DateTimePicker>
                                        
                                    </View>

                                </View>
                            </TouchableHighlight>

                        </TouchableHighlight>

                    </View>
                </Modal>
            </View>
            </TouchableHighlight>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
});