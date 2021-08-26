{/* <View style={{ top: 50 }}>
                <Button title='open modal'
                    onPress={() => toggleModel()}
                />
            </View> */}


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

    </ModalContent>
</BottomModal>