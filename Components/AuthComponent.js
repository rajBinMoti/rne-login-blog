import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Stack = createStackNavigator();
const AuthComponent = (props) => {
    const Login = () => {
        return <LoginPage fun1={props.fun1} user={props.user} />;
    }
    const Register = () => {
        return <RegisterPage fun2={props.fun2} />;
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthComponent
