import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, StatusBar } from 'react-native'
import { Button } from 'react-native-elements';

const LoginPage = (props) => {
    const navigator = useNavigation();
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    return (
        <View
            style={styles.container}>
            <Text
                style={styles.header}>Login Page</Text>
            <View
                style={styles.inps}>
                <TextInput
                    placeholder="Username"
                    value={userName}
                    onChangeText={setUserName} />
            </View>
            <View
                style={styles.inps}>
                <TextInput
                    placeholder="Password"
                    value={userPass}
                    secureTextEntry={true}
                    onChangeText={setUserPass} />
            </View>
            <Button
                style={styles.btn}
                title="Login"
                onPress={() => {
                    let flag = false;
                    let currentUser = null;
                    props.user.forEach(_user => {
                        if (_user.username == userName
                            && _user.password == userPass) {
                            flag = true;
                            currentUser = _user;
                        }
                    });
                    if (flag)
                        props.fun1(currentUser);
                    else
                        alert('Invalid Credentials');
                }} />
            <Button
                style={styles.btn}
                title="Register Now"
                onPress={() => navigator.navigate('Register')}
            />
            <Text
                style={styles.header}>Registered User: {props.user.length}</Text>
            <StatusBar style='auto' />
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inps: {
        borderBottomColor: '#111',
        borderWidth: 1,
        marginVertical: 5,
        padding: 5,
        fontSize: 28,
        width: Dimensions.get('window').width * 0.5
    },
    header: {
        fontSize: 32
    },
    btn: {
        width: Dimensions.get('window').width * 0.5
    }

});