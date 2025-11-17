import {Text, Image, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OnBoardings(){
	const [page, setPage] = useState<number>(0) 

	return (
		<View className="h-full flex flex-col items-center justify-between border-2 border-green-400 px-4 py-12" >
	 	<View className="self-end flex flex-col justify-center rounded-3xl border-2 border-[#aeaeff]" >
			<TouchableOpacity  
				onPress={()=>{console.log("skip pressed")}}
				className="px-4 py-1 rounded-xl border-1 border-gray-400 bg-gray-100 text-lg text-gray-600"
			>
				  <Text>Skip</Text>
			</TouchableOpacity>
		</View>
		<View className="max-h-52 h-48 max-w-52 w-48 flex flex-col justify-center items-center rounded-[100%] p-5 bg-green-200">
			<FontAwesome5 name="money-bill" size={50} color="green" />
		</View>
		<View className="text-center">
			<Text className="font-bold text-3xl tex: border-1 my-2" >
				Track Debts and Credits Easily
			</Text>
			<Text className="text-center text-xl">
				Quickly add and manage money owed between you and your friends.
			</Text>
		</View>
		<View className="flex flex-row items-center"> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-500`} /> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} />
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} />
		</View>
		<View className="mt-5 mb-20 w-full">
			<TouchableOpacity className="flex flex-col items-center rounded-xl w-full p-4 bg-green-400">
				<Link href="/onboardings/screen2" aschild>
					<Text>Next</Text>
				</Link>
			</TouchableOpacity>
		</View>
		</View>
	)
}
