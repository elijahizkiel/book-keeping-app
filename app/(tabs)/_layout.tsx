import {Tabs} from 'react-native';
export default function Layout(){

return (
		<Tabs>
			<Tabs.Screen name="home" options={{ title:"Home"}} />
			<Tabs.Screen name="transactions" options={{title:"Transactions"}} /> 
			<Tabs.Screen name="friends" options={{title:"Friends"}} />
			<Tabs.Screen name="settings" options={{title:"Settings"}} />
		</Tabs>
	);
}
