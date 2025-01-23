import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ChatPage from './ChatPage';
import {MessageText} from 'iconsax-react-native';

export default function Chats() {
  const navigate = useNavigation();
  const users = [
    {
      id: 1,
      name: 'Arda Demir',
      profileImage: 'https://randomuser.me/api/portraits/men/10.jpg', // Örnek profil resmi URL'si
      message:
        'Merhaba! Bugün akşam arkadaşlarla buluşuyoruz, gelmek ister misin?',
      date: '15.01.2025',
    },

    {
      id: 2,
      name: 'Melis Kaya',
      profileImage: 'https://randomuser.me/api/portraits/women/20.jpg', // Örnek profil resmi URL'si
      message: 'Heyyy, yeni projeye başladım! Çok heyecanlıyım.',
      date: '12.01.2025',
    },
    {
      id: 3,
      name: 'Bora Yıldız',
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg', // Örnek profil resmi URL'si
      message: 'Yarın sabah erken bir çekimim var, güneş doğarken plajda.',
      date: '10.01.2025',
    },
    {
      id: 4,
      name: 'Zeynep Altun',
      profileImage: 'https://randomuser.me/api/portraits/women/8.jpg', // Örnek profil resmi URL'si
      message: 'Bugün projeyi teslim ettim, nihayet!',
      date: '08.01.2025',
    },
    {
      id: 5,
      name: 'Kaan Şahin',
      profileImage: 'https://randomuser.me/api/portraits/men/12.jpg', // Örnek profil resmi URL'si
      message: 'Bugün yeni şarkı için denemeler yaptık, bence harika oldu!',
      date: '19.12.2024',
    },
  ];

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginVertical: 10,
          marginHorizontal: 8,
        }}>
        Sohbetler
      </Text>
      <View>
        {users.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigate.navigate('ChatPage', {user: item})}>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                borderBottomWidth: 1,
                borderColor: 'grey',
                padding: 5,
              }}>
              <View>
                <Image
                  source={{uri: item.profileImage}}
                  style={{width: 50, height: 50, borderRadius: 100}}
                />
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {item.name}
                </Text>
                <Text style={{width: '70%', flexWrap: 'wrap', lineHeight: 20}}>
                  {item.message}
                </Text>
              </View>
              <Text
                style={{
                  position: 'absolute',
                  marginLeft: 310,
                  marginTop: 10,
                }}>
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          width: 50,
          height: 50,
          padding: 2,
          backgroundColor: '#075e54',
          position: 'absolute',
          bottom: -230,
          left: 320,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}>
        <MessageText size="32" color="white" style={{}} />
      </View>
    </ScrollView>
  );
}
