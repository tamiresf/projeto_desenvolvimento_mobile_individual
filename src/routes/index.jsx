import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from '../pages/home'
import { Search } from '../pages/search'
import { Inbox } from '../pages/inbox'
import { New } from '../pages/new'
import { Profile } from '../pages/profile'

import { Ionicons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ButtonNew } from '../components/ButtonNew'

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,

            tabBarStyle:{
                backgroundColor: "#000",
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: "#FFF",
        }}>
            <Tab.Screen
            name="Início"
            component={Home}
            options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused) {
                        return <Ionicons name="home" size={size} color={color}/>
                    }
                    return <Ionicons name="home-outline" size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen
            name="Amigos"
            component={Search}
            options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused) {
                        return <Feather name="users" size={size} color={color}/>
                    }
                    return <Feather name="users" size={size} color={color}/>
                }
            }}
            />

            <Tab.Screen
            name="New"
            component={New}
            options={{
                tabBarIcon: ({ size }) => {
                   return <ButtonNew size={size}/>
                }
            }}
            />

            <Tab.Screen
            name="Caixa de entrada"
            component={Inbox}
            options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused) {
                        return <MaterialCommunityIcons name="message-minus-outline" size={size} color={color}/>
                    }
                    return <MaterialCommunityIcons name="message-minus-outline" size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen
            name="Perfil"
            component={Profile}
            options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused) {
                        return <AntDesign name="user" size={size} color={color}/>
                    }
                    return <AntDesign name="user" size={size} color={color}/>
                }
            }}
            />
        </Tab.Navigator>
    )
}