import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  ArrowRight2,
  SecurityUser,
  TagUser,
  MessageFavorite,
  Star,
  Devices,
  Key,
  Unlock,
  Messages,
  MessageMinus,
  ArrowSwapVertical,
  Grammerly,
  Profile2User,
} from 'iconsax-react-native';

export default function Settings() {
  const settingsItems = [
    {
      title: 'Listeler',
      icon: <TagUser size="28" color="black" />, // Iconsax list ikonu
    },
    {
      title: 'Toplu Mesajlar',
      icon: <MessageFavorite size="28" color="black" />, // Iconsax send ikonu
    },
    {
      title: 'Yıldızlı Mesajlar',
      icon: <Star size="28" color="black" />, // Iconsax star ikonu
    },
    {
      title: 'Bağlı Cihazlar',
      icon: <Devices size="28" color="black" />, // Iconsax devices ikonu
    },
  ];

  const settingsItems2 = [
    {
      title: 'Hesap',
      icon: <Key size="28" color="black" />,
    },
    {
      title: 'Gizlilik',
      icon: <Unlock size="28" color="black" />,
    },
    {
      title: 'Sohbetler',
      icon: <Messages size="28" color="black" />,
    },
    {
      title: 'Bildirimler',
      icon: <MessageMinus size="28" color="black" />,
    },
    {
      title: 'Depolama ve Veriler',
      icon: <ArrowSwapVertical size="28" color="black" />,
    },
  ];

  const settingsItems3 = [
    {
      title: 'Yardım',
      icon: <Grammerly size="28" color="black" />,
    },
    {
      title: 'Arkadaşlarınızıı davet edin',
      icon: <Profile2User size="28" color="black" />,
    },
  ];

  return (
    <ScrollView style={{margin: 8}}>
      <Text style={styles.title}>Ayarlar</Text>
      <TextInput placeholder="Ara" style={styles.searchInput} />
      <View
        style={{
          height: 110,
          width: '95%',
          backgroundColor: 'white',
          marginHorizontal: 'auto',
          marginVertical: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            borderBottomWidth: 0.2,
            borderColor: 'grey',
            paddingBottom: 8,
          }}>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={{
              uri: 'https://img.myloview.de/bilder/brunet-caucasian-woman-in-chemise-abstract-female-avatar-vector-illustration-400-171433306.jpg',
            }}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Fatma Zehra Çetin
            </Text>
            <Text>Müsait</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
          <SecurityUser size="28" color="black" style={{marginLeft: 8}} />
          <Text style={{marginTop: 5}}>Avatar</Text>
          <ArrowRight2 size="20" color="grey" />
        </View>

        {/* Ayar Listesi */}
        <View style={styles.settingsListContainer}>
          {settingsItems.map(item => (
            <View key={item.title} style={styles.settingsItem}>
              {/* İkon ve Başlık */}
              <View style={styles.iconContainer}>{item.icon}</View>
              <Text style={styles.settingsTitle}>{item.title}</Text>
              <ArrowRight2 size={18} color="grey" />
            </View>
          ))}
        </View>
        <View style={styles.settingsListContainer}>
          {settingsItems2.map(item => (
            <View key={item.title} style={styles.settingsItem}>
              {/* İkon ve Başlık */}
              <View style={styles.iconContainer}>{item.icon}</View>
              <Text style={styles.settingsTitle}>{item.title}</Text>
              <ArrowRight2 size={18} color="grey" />
            </View>
          ))}
        </View>
        <View style={styles.settingsListContainer}>
          {settingsItems3.map(item => (
            <View key={item.title} style={styles.settingsItem}>
              {/* İkon ve Başlık */}
              <View style={styles.iconContainer}>{item.icon}</View>
              <Text style={styles.settingsTitle}>{item.title}</Text>
              <ArrowRight2 size={18} color="grey" />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchInput: {
    width: '95%',
    height: 40,
    backgroundColor: '#cecece',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  settingsListContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    borderColor: '#ddd',
  },
  iconContainer: {
    marginRight: 10,
    flexDirection: 'row', // İkon ile başlık arasına mesafe ekleyelim
  },
  settingsTitle: {
    fontSize: 15,
    flex: 1, // Sağdaki ok ikonunun sola itilmesini sağlar
  },
});
