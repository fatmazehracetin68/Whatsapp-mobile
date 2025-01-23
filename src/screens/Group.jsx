import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  Profile2User,
  Magicpen,
  Bubble,
  Convert3DCube,
  ArrowRight2,
} from 'iconsax-react-native';

export default function Group() {
  return (
    <View style={{margin: 8}}>
      <Text style={styles.title}>Topluluklar</Text>
      <View
        style={{
          backgroundColor: 'lightgreen',
          width: 150,
          height: 150,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 'auto',
          borderRadius: 10,
          paddingTop: 15,
        }}>
        <Profile2User size="50" color="green" />
        <Magicpen size="50" color="white" />
        <Convert3DCube size="50" color="white" />
        <Bubble size="50" color="green" />
      </View>
      <Text style={{fontSize: 20, marginTop: 20}}>
        Topluluklar sayesinde bağlantıda kalın
      </Text>
      <Text style={{color: 'grey', lineHeight: 20, marginTop: 10}}>
        Topluluklar,üyelerin konulara göre ayrılmış gruplarda bir araya
        gelmelerini sağlar. Eklediğiniz tüm topluluklar burada gösterilir.
      </Text>
      <View
        style={{flexDirection: 'row', marginHorizontal: 'auto', marginTop: 20}}>
        <Text style={{color: 'green'}}>Örnek topluluklara bakın</Text>
        <ArrowRight2
          size="20"
          color="green"
          style={{marginHorizontal: 'auto'}}
        />
      </View>
      <Text
        style={{
          backgroundColor: 'green',
          padding: 8,
          borderRadius: 10,
          color: 'white',
          textAlign: 'center',
          marginTop: 20,
          width: '90%',
          marginHorizontal: 'auto',
        }}>
        Yeni Topluluk
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 25, fontWeight: 'bold', marginVertical: 10},
});
