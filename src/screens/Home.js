import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Button title='go to Ui' onPress={() => navigation.navigate('MyProfile')} />
        </View>
    )
}

export default Home
