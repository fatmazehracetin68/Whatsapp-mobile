import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {Camera, Magicpen} from 'iconsax-react-native';

export default function Status() {
  return (
    <View style={{margin: 8}}>
      <Text style={styles.title}>Güncellemeler</Text>
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Durum</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Camera style={styles.icon} size="25" color="#000000" />
          <Magicpen style={styles.icon} size="25" color="#000000" />
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Text
            style={{
              marginTop: 'auto',
              marginBottom: 5,
              textAlign: 'center',
            }}>
            Durum Ekle
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/id/1173778514/tr/fotoğraf/rüzgarda-sallanan-türk-bayrağı.jpg?s=612x612&w=0&k=20&c=bRpKI4m671qG8LYh2-d_zRTsgOkAFSzPFgUZig1OMD0=',
            }}
          />
          <Text
            style={{
              marginTop: 'start',
              marginBottom: 5,
              textAlign: 'center',
              position: 'absolute',
              bottom: 0,
              left: 30,
              backgroundColor: '#cdcdcd',
              padding: 3,
              borderRadius: 10,
            }}>
            Fatma
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.sanatbul.org/wp-content/uploads/2022/10/gorsel.jpg',
            }}
          />
          <Text
            style={{
              marginTop: 'start',
              marginBottom: 5,
              textAlign: 'center',
              position: 'absolute',
              bottom: 0,
              left: 30,
              backgroundColor: '#cdcdcd',
              padding: 3,
              borderRadius: 10,
            }}>
            Kaan
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://ideacdn.net/idea/cy/21/myassets/blogs/blog-111.jpg?revision=1722544901',
            }}
          />
          <Text
            style={{
              marginTop: 'start',
              marginBottom: 5,
              textAlign: 'center',
              position: 'absolute',
              bottom: 0,
              left: 30,
              backgroundColor: '#cdcdcd',
              padding: 3,
              borderRadius: 10,
            }}>
            Gökçe
          </Text>
        </View>
      </ScrollView>
      <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Kanallar</Text>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://play-lh.googleusercontent.com/PAMLBoJu_fOkov5hQl01czOSF6tHUDnCSHAMAaB9k83oE_zU48JfiSplsORYm-BiEo4',
            }}
            style={{width: 50, height: 50, borderRadius: 100}}
          />
          <View style={{gap: 5}}>
            <Text style={{fontWeight: 'bold'}}>BTK Akademi</Text>
            <Text>Başvurular açıldı harika fırsatları kaçırmayın!</Text>
          </View>
        </View>
        <Text style={{marginLeft: 20, marginTop: 10}}>
          Takip edebileceğiniz kanallar bulun
        </Text>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            gap: 20,
            marginLeft: 20,
            borderBottomWidth: 0.5,
            borderColor: 'grey',
            paddingBottom: 8,
          }}>
          <Image
            source={{
              uri: 'https://yt3.googleusercontent.com/Js3-IqMFlaRuEIF9_zBEh1Tv-NWsjb1-gEnbmcLchAdunyssDC2mguOpvxQJ62CIwIkjvx0--0k=s900-c-k-c0x00ffffff-no-rj',
            }}
            style={{width: 50, height: 50, borderRadius: 100}}
          />
          <View style={{gap: 5}}>
            <Text style={{fontWeight: 'bold'}}>Galatasaray</Text>
            <Text>4.2 Mn Takipçi!</Text>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: 'lightgreen',
                padding: 5,
                borderRadius: 10,
                marginLeft: 85,
              }}>
              Takip et
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            gap: 20,
            marginLeft: 20,
            borderBottomWidth: 0.5,
            borderColor: 'grey',
            paddingBottom: 8,
          }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxy5eoT7Abol9bDSTD2w89hrah3Rys90aXw&s',
            }}
            style={{width: 50, height: 50, borderRadius: 100}}
          />
          <View style={{gap: 5}}>
            <Text style={{fontWeight: 'bold'}}>Gratis</Text>
            <Text>1 Mn Takipçi!</Text>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: 'lightgreen',
                padding: 5,
                borderRadius: 10,
                marginLeft: 100,
              }}>
              Takip et
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          backgroundColor: 'lightgreen',
          padding: 5,
          borderRadius: 10,
          width: '50%',
          marginLeft: 20,
          marginTop: 10,
        }}>
        Daha fazlasını keşfedin
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 25, fontWeight: 'bold', marginVertical: 10},
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '#cdcdcd',
    borderRadius: 100,
    padding: 5,
  },
  imageContainer: {
    width: 100,
    height: 150,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginHorizontal: 3,
    marginVertical: 10,
  },
  image: {width: 100, height: 150, borderRadius: 10},
});
