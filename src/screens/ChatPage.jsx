import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function ChatPage() {
  const route = useRoute();
  const {user} = route.params; // Kullanıcı bilgileri
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {text: user.message, sender: 'other'},
  ]); // İlk mesaj

  const sendMessage = () => {
    if (message.trim() === '') return;

    setMessages([...messages, {text: message, sender: 'me'}]);
    setMessage('');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#160840'}}>
      {/* Arka Plan Resmi */}
      <Image
        source={{
          uri: 'https://storage.ko-fi.com/cdn/useruploads/display/e86c13b0-4e16-4c56-b5b5-1a90acbea77c_naruwhatsappwallpaperdark.png',
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
      />

      {/* Lacivert Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#171717',
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ffffff50',
        }}>
        <Image
          source={{uri: user.profileImage}}
          style={{width: 50, height: 50, borderRadius: 100, marginRight: 10}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          {user.name}
        </Text>
      </View>

      {/* Mesaj Alanı */}
      <ScrollView style={{flex: 1, padding: 15}}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={{
              alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'me' ? '#dcf8c6' : '#075e54',
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
              maxWidth: '70%',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: msg.sender === 'me' ? 'black' : 'white',
              }}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Alt Input Alanı */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#222',
          padding: 10,
          borderTopWidth: 1,
          borderTopColor: '#555',
        }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: '#171717',
            color: 'white',
            padding: 10,
            borderRadius: 20,
            fontSize: 16,
          }}
          placeholder="Mesaj yaz..."
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            marginLeft: 10,
            backgroundColor: '#25d366',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
