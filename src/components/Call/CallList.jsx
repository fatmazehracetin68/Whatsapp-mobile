// CallList.js
import {Video, Call} from 'iconsax-react-native';
import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

const CallList = ({callData}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.callItem}>
        <Image
          source={{uri: item.image}}
          style={{width: 50, height: 50, borderRadius: 100, marginRight: 10}}
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* Video veya Sesli Arama İkonu */}
            {item.type === 'video' ? (
              <Video size={20} color="black" />
            ) : (
              <Call size={20} color="black" />
            )}
            <Text style={styles.direction}>{item.direction}</Text>
          </View>
        </View>

        <Text style={styles.date}>{item.date}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={callData}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 10,
  },
  direction: {
    fontSize: 14,
    color: '#888',
    marginLeft: 5,
  },
  date: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 'auto',
  },
});

export default CallList;
