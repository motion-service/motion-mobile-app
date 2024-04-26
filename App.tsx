import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return <Text>Home</Text>;
}

function SearchScreen() {
    return <Text>Search</Text>;
}

function NotificationScreen() {
    return <Text>Notification</Text>;
}

function MessageScreen() {
    return <Text>Message</Text>;
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Workspace',
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={NotificationScreen}
                    options={{
                        title: 'Teamspace',

                    }}
                />
                <Tab.Screen
                    name="Notification"
                    component={SearchScreen}
                    options={{
                        title: 'Notification',

                    }}
                />
                <Tab.Screen
                    name="Message"
                    component={MessageScreen}
                    options={{
                        title: 'Profile',

                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9898',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
