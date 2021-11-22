import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

const HomePage = (props) => {
    return (
        <View>
            <Text>Hello {props.user.firstName}</Text>
            <Button
                title="Logout"
                onPress={props.fun1}
            />
        </View>
    )
}

export default HomePage
