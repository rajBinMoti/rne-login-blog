import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import AuthComponent from './AuthComponent';
import PagesHandler from './PagesHandler';

const MainComponent = () => {
    const [user, setUser] = useState([
        {
            firstName: "Imran",
            lastName: "Khan",
            password: 'pass123',
            username: "imkhan",
            gender: 'Male',
            age: 60
        },
        {
            firstName: "Imran1",
            lastName: "Khan1",
            password: 'pass123',
            username: "imkhan1",
            gender: 'Male',
            age: 60
        },
    ]);

    const [currentUser, setCurrentUser] = useState(null);

    const [isLoggedIn, setLogIn] = useState(false);

    const checkCredentials = (user) => {
        setLogIn(!isLoggedIn);
        setCurrentUser(user);
    }

    const logOut = () => {
        setLogIn(!isLoggedIn);
        setCurrentUser(null);
    }

    const registerUser = (newUser) => {
        let temp = user;
        temp.push(newUser);
        setUser(temp);
        setLogIn(!isLoggedIn);
        setCurrentUser(newUser);
    }

    return (
        <>
            <NavigationContainer>
                {
                    isLoggedIn ? <PagesHandler fun1={logOut} user={currentUser} />
                        : <AuthComponent fun1={checkCredentials} fun2={registerUser} user={user} />
                }
            </NavigationContainer>
        </>
    )
}

export default MainComponent
