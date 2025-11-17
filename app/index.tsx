import { Redirect} from "expo-router";
import React from "react"
export default function Index() {
	const [firstOnBoarding, setFirstOnBoarding] = React.useState<boolean>(true);
	if(firstOnBoarding) return <Redirect href="/onboardings"/>
	return (<Redirect href="/(tabs)/home"/>);
}
