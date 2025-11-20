import { Text, View, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OnBoardingsScreen2(){
	const router = useRouter()	
	return (
		<View className="h-full flex flex-col items-center justify-between border-2 border-green-400 px-4 py-12" >
	 	<View className="flex flex-row justify-between items-center w-full" >
			<TouchableOpacity 
				onPress={()=>{
					if(router.canGoBack()) router.back();
				}}>
				<FontAwesome5 name="arrow-left" color="#4cae8f" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity  
				onPress={()=>{
					console.log("skip pressed"); 
					router.replace("/(tabs)/home");
					}
				}
				className="px-4 py-1 rounded-3xl border-2 border-gray-500 bg-gray-100 text-lg text-gray-600"
			>
				  <Text>Skip</Text>
			</TouchableOpacity>
		</View>
		<View className="rounded-full flex justify-center items-center text-center p-7 w-56 h-56 bg-[#4ACE8F1A]">
			<FontAwesome5 name="lock" size={80} color="#4ACE8F" />
		</View>
		<View>
			<Text className="font-extrabold text-3xl text-center mb-4">
				Your Privacy Comes First
			</Text>
			<Text className="text-center text-xl px-4 my-2">
				This app is designed for privacy. All data is stored securely and exclusively on your device. No data is ever sent to our servers.
			</Text>
			<Text className="text-center text-xl px-4 my-2">
				To save your debts and credits, we need access to your device's local storage. We don't access any other files. 
			</Text>
		</View>
		<View className="flex flex-row items-center"> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} /> 
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-500`} />
			<View className={`w-3 h-3 mx-2 rounded-full bg-green-200`} />
		</View>
		<View className="mt-5 mb-20 w-full">
			<TouchableOpacity className="flex flex-col items-center rounded-xl w-full p-4 bg-green-400" onPress={()=>router.replace("/onboardings/screen3")} >
					<Text>Grant Permission</Text>
			</TouchableOpacity>
		</View>
		</View>
	)
}

