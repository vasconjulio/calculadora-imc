import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "../ResultIMC";

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [massageImc, setMessageImc]= useState("Preencha o peso e altura!");
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setMessageImc("Seu IMC é igual:")
    }
}

    return(
       <View>
           <View>

               <Text>Altura</Text>
               <TextInput
               placeholder="Ex. 1.75"
               keyboardType="numeric"
               />

               <Text>Peso</Text>
               <TextInput
               placeholder="Ex. 75.365"
               keyboardType="numeric"
               />
               <Button title="Calcular IMC"/>              
           </View>
           <ResultImc messageResultImc={messageImc} resultImc={imc} />
       </View>
    );
}