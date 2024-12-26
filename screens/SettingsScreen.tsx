import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function SettingsScreens({ navigation }) {
  const names = "Dn";
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.description}>
        This is a simple React Native screen with a button.
      </Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Go to Dashboard" onPress={() => navigation.jumpTo("Dashboard")} />        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
