import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from "react-native";

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome,  Aline</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={.7}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginTop: 20 }]}>
          My Skills
        </Text>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    borderRadius: 7,
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS == 'ios' ? 15 : 10,
    marginTop: 30
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }

});
