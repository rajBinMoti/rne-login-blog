import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomePage from './HomePage';



const PagesHandler = ({ fun1, user }) => {
    const Home = () => {
        return <HomePage user={user} fun1={fun1} />
    }

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}

export default PagesHandler
