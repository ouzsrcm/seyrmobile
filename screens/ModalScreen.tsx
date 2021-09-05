import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, FlatList, Linking } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isTSExternalModuleReference } from '@babel/types';

const sectionsList = [
  {
    id: 'wp',
    title: 'Whatsapp',
    url: 'whatsapp://send?text=http://www.seyrfm.com.tr',
    icon: 'whatsapp'
  }, {
    id: 'fb',
    title: 'Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=http://www.seyrfm.com.tr',
    icon: 'facebook-square'
  }, {
    id: 'tw',
    title: 'Twitter',
    url: 'https://twitter.com/home?status=http://www.seyrfm.com.tr',
    icon: 'twitter'
  }, {
    id: 'li',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=http://www.seyrfm.com.tr',
    icon: 'linkedin'
  }, {
    id: 'pi',
    title: 'Pinterest',
    url: 'https://pinterest.com/pin/create/button/?url=http://www.seyrfm.com.tr',
    icon: 'pinterest'
  },
];

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function fontAwesomeIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

function checkItem(itemId) {
  var res = sectionsList.find(function (el) {
    if (el.id == itemId)
      return el.url;
    else return null;
  });
  if (res == null) return;
  Linking.openURL(res.url);
}

const Item = ({ title, icon, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <View style={{ paddingRight: 20, backgroundColor: '#eee' }}>
        <FontAwesome5 size={30} name={icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function ModalScreen() {
  const renderItem = ({ item }) => <Item title={item.title} onPress={() => checkItem(item.id)} icon={item.icon} />;
  return (
    <View style={styles.container}>
      <FlatList style={styles.flatlist} data={sectionsList} renderItem={renderItem} keyExtractor={item => item.id} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    backgroundColor: '#eee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row'
  },
  flatlist: {
    width: '100%'
  }
});
