import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import PetList from '../components/PetList'

const MyPets = () => {
    return (
        <ScrollView>
            <PetList />
            <PetList />
            <PetList />
            <PetList />
            <PetList />
        </ScrollView>
    )
}

export default MyPets
