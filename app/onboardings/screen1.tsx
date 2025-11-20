import {Text, Image, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OnBoardingsScreen1(){
       	const router = useRouter()
	return (
		<View className="h-full flex flex-col items-center justify-between border-2 border-green-400 px-4 py-12" >
	 	<View className="self-end flex flex-col justify-center rounded-3xl border-2 border-[#aeaeff]" >
			<TouchableOpacity  
				onPress={()=>{console.log("skip pressed"); router.replace("/(tabs)/home");}}
				className="px-4 py-1 rounded-xl border-1 border-gray-400 bg-gray-100 text-lg text-gray-600"
			>
				  <Text>Skip</Text>
			</TouchableOpacity>
		</View>
		<View className="rounded-full flex justify-center items-center text-center p-7 w-56 h-56 bg-[#4ACE8F1A]">
			<FontAwesome5 name="money-bill" size={80} color="#4ACE8F" />
		</View>
		<View>
			<Text className="font-extrabold text-3xl text-center my-4">
				Track Debts and Credits Easily
			</Text>
			<Text className="text-center text-xl px-4">
				Quickly add and manage money owed between you and your friends.
			</Text>
		</View>
		<View className="flex flex-row items-center"> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-500`} /> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} />
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} />
		</View>
		<View className="mt-5 mb-20 w-full">
			<TouchableOpacity className="flex flex-col items-center rounded-xl w-full p-4 bg-green-400" onPress={()=>{router.replace("/onboardings/screen2")}} >
					<Text>Next</Text>
			</TouchableOpacity>
		</View>
		</View>
	)
}
