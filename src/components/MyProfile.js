import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ModalContent } from 'react-native-modals'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MyPets from '../screens/MyPets'
import MyGallery from '../screens/MyGallery'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const MyProfile = () => {

    const icon = <Icon name='pencil-circle' color='#ff8000' size={30} />
    const flag = <Icon name='flag-variant' style={{ marginRight: 5 }} color='#ff8000' />
    const mailBox = <Icon name='mailbox-up' style={{ marginRight: 5 }} color='#ff8000' />
    const cake = <MaterialIcon name='cake' style={{ marginRight: 5 }} color='#ff8000' />
    const call = <MaterialIcon name='call' style={{ marginRight: 5 }} color='#ff8000' />
    const email = <MaterialIcon name='email' style={{ marginRight: 5 }} color='#ff8000' />
    const location = <MaterialIcon name='location-on' style={{ marginRight: 5 }} color='#ff8000' />
    return (
        <View>
            <View style={styles.header}>
                <Text>Charlotte Hawrin</Text>
                {icon}
            </View>
            <View style={styles.smallBox}>
                <View style={{ alignItems: 'center', marginHorizontal: 15, marginVertical: 10 }}>
                    <Text>
                        4
                </Text>
                    <Text>
                        Posts
                </Text>
                </View>
                <View style={{ alignItems: 'center', marginHorizontal: 5, marginVertical: 10, borderRightColor: 'black', borderRightWidth: 1, borderLeftColor: 'black', borderLeftWidth: 1, paddingHorizontal: 25 }}>
                    <Text>
                        297
                </Text>
                    <Text>
                        Following
                </Text>
                </View>
                <View style={{ alignItems: 'center', marginHorizontal: 15, marginVertical: 10 }}>
                    <Text>
                        521
                </Text>
                    <Text>
                        Followers
                </Text>
                </View>
            </View>
            <View style={styles.details}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>{cake}<Text> 15 january, 1990</Text></View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>{call}<Text> +44 01929 17890</Text></View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>{email}<Text> charlotte.harwin2gmail.com</Text></View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>{flag}<Text> Republic of ireland</Text></View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>{mailBox}<Text> WD19 7HJ</Text></View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>{location}<Text> 12 Lindrick House, Ainsdale Road, Watford</Text></View>
            </View>
            <View style={styles.tabScreens}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    smallBox: {
        backgroundColor: '#fcfcfc',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 12
    },
    details: {
        marginTop: 10
    },
    tabScreens: {

    }
})

export default MyProfile;
