import * as React from 'react';
import rea, { useState } from "react";

import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';


import styled from "styled-components";


const Heading = styled.h1`
    color: red;
    text-align: center;
    `;

const HeadingOne = styled.h1`
    margin: 1em 0 0.5em 0;
    	color: #343434;
    	font-size: 22px;
    	line-height: 40px;
    	font-weight: normal;
    	text-transform: uppercase;
    	font-family: 'Orienta', sans-serif;
    	letter-spacing: 1px;
    	font-style: italic;
`;

const CustomInput = styled.input`
         border: none;
          -webkit-appearance: none;
          -ms-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: #f2f2f2;
          padding: 12px;
          border-radius: 3px;
          width: 250px;
          outline: none;
          font-size: 14px;
           border-bottom: 1px solid black;

`;

const CustomPlaceHolder = styled.span`
        position: absolute;
          left: 12px;
          top: calc(50% + 10px);
          transform: translateY(-50%);
          color: #aaa;
          transition:
            top 0.3s ease,
            color 0.3s ease,
            font-size 0.3s ease;
`;


const RedButton = styled.button`
       align-items: center;
         user-select: none;
         display: inline-flex;
         justify-content: center;
         padding: 6px 16px;
         flex-shrink: 0;
         border-radius: 3px;
         font-weight: 500;
         background: rgba(235, 87, 87, 0.03);
         color: rgb(0, 128, 128);
         border: 1px solid rgb(0, 128, 128);
         box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;

         width: 100%;
         margin-top: 6px;
         margin-bottom: 12px;
          cursor: pointer;
           &:hover {
             background-color: #f3edeb;
           }
         `;


export default function TabTwoScreen() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const register = () => {};
  const login = () => {};
  const getUser = () => {};






  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />



      <div style={styles.signup}>
        <HeadingOne>Sign Up</HeadingOne>



        <CustomInput type="text" placeholder='Email' onChange ={e => setRegisterEmail(e.target.value)}/>



        <div>
        <CustomInput type="password" placeholder='Password' onChange ={e => setRegisterPassword(e.target.value)}/>
        </div>
        <RedButton onClick={register}>SIGN UP</RedButton>


      </div>

      <div class="login">
         <HeadingOne>Login</HeadingOne>
         <CustomInput placeholder='Username/Email' onChange = {e => setLoginUsername(e.target.value)}/>
         <div>
         <CustomInput type="password" placeholder='Password' onChange ={e => setLoginPassword(e.target.value)} />
         </div>
         <RedButton  onClick={login} type="submit" >LOGIN</RedButton>
      </div>




    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',




  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
