import React, {useState} from 'react';
import { Modal, SafeAreaView, Text, StyleSheet, TextInput, View, ScrollView } from 'react-native';

const Formulario = ({ modalVisible }) => {
    return (
        <Modal
            animationType='slice'
            visible={modalVisible}
        >
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text style={styles.label}>Veterinaria Medellin</Text>
                        <Text style={styles.label}>Nombre de la mascota</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Nombre del propetario</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Telefono</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );

}

export default Formulario;

const styles = StyleSheet.create ({
    contenido:{
        
    }
})