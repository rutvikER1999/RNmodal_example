import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const PetList = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/image2.jpg')} style={styles.petImage} />
            </View>
            <View style={styles.details}>
                <View style={styles.head}>
                    <Text style={styles.name}>Boris</Text>
                    <Text style={styles.brid}>British Bulldog</Text>
                </View>
                <View style={styles.detail}>
                    <View><Text style={styles.age}>1 Year 6 Months</Text></View>
                    <View><Text style={styles.gender}>Male, Neutered</Text></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
        marginVertical: 5
    },
    petImage: {
        height: 48,
        width: 48,
        borderRadius: 12,
        marginRight: 10
    },
    details: {
        height: 53,
        justifyContent: 'space-between',
        flex: 1
    },
    head: {

    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 13
    },
    brid: {
        fontSize: 12,
        fontWeight: '300'
    },
    age: {
        fontSize: 8,
        fontWeight: '200'
    },
    gender: {
        fontSize: 8,
        fontWeight: '300'
    }

})

export default PetList
