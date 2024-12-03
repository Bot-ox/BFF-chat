import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

// Define the Message type
type Message = {
  id: string;
  text: string;
};

const ChatScreen = () => {
  // State to manage messages, typed as an array of Message
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>(''); // State for input, typed as a string

  // Function to handle sending a message
  const handleSend = () => {
    // Add the user's message to the chat
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: input }]);
    setInput('');

    // Simulate a bot response after 1 second
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: 'Hello from the bot!' }]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Display messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.message}>{item.text}</Text>
        )}
      />

      {/* Input for the user */}
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type a message..."
      />

      {/* Button to send the message */}
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  message: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ChatScreen;

