import React, { useState } from 'react'
import { StyleSheet, Button, ImageBackground, Platform, View, Text, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { Backdrop, BottomModal, ModalContent, SlideAnimation } from 'react-native-modals';
import MyProfile from '../components/MyProfile';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyPets from './MyPets';
import MyGallery from './MyGallery';

const Profile = () => {

    // const TabStack = createMaterialTopTabNavigator();
    // const Stack = createNativeStackNavigator();
    // const NavFlow = () => {
    //     return (
    //         <TabStack.Navigator>
    //             <TabStack.Screen name='My Pets' component={MyPets} />
    //             <TabStack.Screen name='My Gallery' component={MyGallery} />
    //         </TabStack.Navigator>
    //     )
    // }

    const [showModal, setShowModal] = useState(true);

    const toggleModel = () => {
        setShowModal(!showModal)
    }

    return (
        <ImageBackground style={styles.container}
            source={require('../assets/image1.jpg')}
        >
            <View style={styles.modalContainer}>
                <BottomModal
                    visible
                    //onTouchOutside={() => toggleModel()}
                    // onSwipeOut={() => setShowModal(true)}
                    style={{ marginTop: 120 }}
                    width={1}
                    height={0.7}
                    hasOverlay={true}
                    overlayOpacity={0}
                    //swipeDirection={['up']}
                    containerStyle={{
                        borderTopRightRadius: 25
                    }}
                    modalStyle={{
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15
                    }}
                >
                    <ModalContent>
                        <MyProfile />
                    </ModalContent>

                    {/* <Stack.Screen name='navvvvv' component={NavFlow} /> */}

                </BottomModal>
            </View>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === 'ios' ? 60 : 80,
    },
    modalContainer: {
        flex: 1,
        maxHeight: 100
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 50
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Profile
