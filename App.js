// Index 

// Import a library to help create a component
import React from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/header';
 
// Create a component
const App = () => (
    <Header headerText={'Albums!'} />
);
    

// Render it to the device
export default App;
