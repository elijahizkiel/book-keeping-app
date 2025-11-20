import { Text, View, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function OnBoardingsScreen2(){
	 const router = useRouter();

	return (
		<View className="h-full flex flex-col items-center justify-between px-4 py-12" >
	 	<View className="flex flex-row justify-between items-center w-full rounded-3xl" >
			<TouchableOpacity 
				onPress={()=>{
					if(router.canGoBack()) router.back();
				}}>
				<FontAwesome5 name="arrow-left" color="#4cae8f" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={()=>{console.log("skip pressed"); router.replace("/(tabs)/home");}}
				className="px-4 py-1 rounded-xl border-22 border-gray-400 bg-gray-100 text-lg text-gray-600"
			>
				  <Text>Skip</Text>
			</TouchableOpacity>
		</View>
		<View className="rounded-full flex justify-center items-center text-center p-7 w-56 h-56 bg-[#4ACE8F1A]">
			<FontAwesome5 name="user-plus" size={80} color="#4ACE8F" />
		</View>
		<View>
			<Text className="font-extrabold text-3xl text-center my-4">
				Let's Get Started
			</Text>
			<Text className="text-center text-xl px-4">
				Track your shared expences by adding a friend. It's is the first step to keeping your finances balanced.
			</Text>
		</View>
		<View className="flex flex-row items-center"> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} /> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} />
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-500`} />
		</View>
		<View className="mt-5 mb-20 w-full">
			<TouchableOpacity className="flex flex-row justify-center items-center rounded-xl w-full p-4 bg-green-400" onPress={()=>router.replace("/(tabs)/friends/add-friend")}>
				<MaterialIcons name="group-add" size={20} color="#0a0a0a" />
				<Text className="text-xl mx-4">Add Your First Friend</Text>
			</TouchableOpacity>
			<TouchableOpacity classname="" onPress={()=>router.replace("/(tabs)/friends/add-friends")}>
				<Text className="decorate-regular decoration-gray-400 underline-offset-2 underline text-gray-400 text-center p-2 my-2">Skip for now</Text>
			</TouchableOpacity>
		</View>
		</View>
	)
}
