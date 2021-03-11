import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, StyleSheet,
    Dimensions, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView
} from 'react-native';

import CustomButton from './CustomButton';

export default function ConfirmSignUp(props) {
    const [state, setState] = useState({ email: '', code: '' });
    return (
        <KeyboardAvoidingView
            behavior='padding'
        >
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <View style={styles.container}>
                    <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 20 }}>Verify your account</Text>
                    <Text>Email</Text>
                    <TextInput
                        placeholder='Enter the email'
                        style={styles.input}
                        value={state.email}
                        onChangeText={(text) => setState({ ...state, email: text })}
                    />
                    <Text>Confirmation Code</Text>
                    <TextInput
                        placeholder='Enter your confirmation code'
                        style={styles.input}
                        value={state.code}
                        onChangeText={(text) => setState({ ...state, code: text })}
                    />

                    <CustomButton title='Confirm' />

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const mainHeight = Dimensions.get('screen').height;
const mainWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: mainWidth / 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        width: mainWidth / 1.1,
        borderRadius: 10,
        marginVertical: 10
    }
})