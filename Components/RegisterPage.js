import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import { Button } from 'react-native-elements';

const RegisterPage = ({ fun2 }) => {
    const navigator = useNavigation();
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastName, setlastName] = useState('');
    const [gender, setgender] = useState('');
    const [age, setage] = useState('');

    return (
        <View
            style={styles.container}>
            <Text
                style={styles.header}>Register Page</Text>
            <View
                style={styles.inps}>
                <TextInput
                    placeholder="Firstname"
                    value={firstname}
                    onChangeText={setfirstname} />
            </View>
            <View
                style={styles.inps}>
                <TextInput
                    placeholder="Lastname"
                    value={lastName}
                    onChangeText={setlastName} />
            </View>
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
                    placeholder="Gender"
                    value={gender}
                    onChangeText={setgender} />
            </View>
            <View
                style={styles.inps}>
                <TextInput
                    placeholder="Age"
                    value={age}
                    onChangeText={setage} />
            </View>
            <View
                style={styles.inps}>
                <TextInput
                    placeholder="Password"
                    keyboardType='password'
                    value={userPass}
                    onChangeText={setUserPass} />
            </View>
            <Button
                style={styles.btn}
                title="Register"
                onPress={() => {
                    if (userName.length > 5) {
                        fun2({
                            firstName: firstname,
                            lastName: lastName,
                            password: userPass,
                            username: userName,
                            gender: gender,
                            age: age
                        });
                    }else{
                        alert('username must be 6 charcter long!')
                    }
                    // alert(userName
                    //     + " " + userPass
                    //     + " " + lastName
                    //     + " " + firstname
                    //     + " " + gender
                    //     + " " + age);
                }} />
            <Button
                style={styles.btn}
                title="Back"
                onPress={() => navigator.navigate('Login')}
            />

        </View>
    )
}

export default RegisterPage

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