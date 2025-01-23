import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {AddCircle} from 'iconsax-react-native';
import CallList from '../components/Call/CallList';
import {callData} from '../components/Call/CallData';

export default function Calls() {
  return (
    <View style={{margin: 8}}>
      <Text style={styles.title}>Aramalar</Text>
      <TextInput
        placeholder="Ara"
        style={{
          width: '95%',
          height: 20,
          backgroundColor: '#cecece',
          paddingVertical: 15,
          marginHorizontal: 'auto',
          borderRadius: 10,
          padding: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
          Favoriler
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'start',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 10,
          }}>
          <AddCircle size="32" color="#cdcdcd" variant="Bold" />
          <Text>Favori Ekle</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
          En Son
        </Text>
      </View>
      <View>
        <CallList callData={callData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 25, fontWeight: 'bold', marginVertical: 10},
});
