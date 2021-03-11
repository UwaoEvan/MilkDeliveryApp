import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, StyleSheet,
    Dimensions, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView
} from 'react-native';

import CustomButton from './CustomButton';

export default function SignUp(props) {
    const [state, setState] = useState({ email: '', password: '', phone: '' });
    if (props.authState === 'signUp') {
        return (
            <KeyboardAvoidingView
                behavior='padding'
            >
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                >
                    <View style={styles.container}>
                        <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 20 }}>Create an Account</Text>
                        <Text>Email</Text>
                        <TextInput
                            placeholder='Enter the email'
                            style={styles.input}
                            value={state.email}
                            onChangeText={(text) => setState({ ...state, email: text })}
                        />
                        <Text>Password</Text>
                        <TextInput
                            placeholder='Enter your password'
                            style={styles.input}
                            value={state.password}
                            onChangeText={(text) => setState({ ...state, password: text })}
                            secureTextEntry={true}
                        />

                        <Text>Phone Number</Text>
                        <TextInput
                            placeholder='Enter your phone number'
                            style={styles.input}
                            value={state.phone}
                            onChangeText={(text) => setState({ ...state, phone: text })}
                        />

                        <CustomButton title='Sign Up' />

                        <View style={styles.labels}>
                            <TouchableOpacity
                                style={{ marginLeft: 0 }}
                            >
                                <Text style={styles.links}>Confirmation Code</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.links}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}
const mainHeight = Dimensions.get('screen').height;
const mainWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    links: {
        color: '#fb6e3b'
    }
})