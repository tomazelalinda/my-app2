import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as obj_DDD from './services/ddd.js';
import CardCidade from './components/card_cidade.js';
import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
export default function App() {
  const [ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);
  const [emFoco, setEmFoco] = useState(false);

  useEffect(() => {
    if (ddd.length === 2) {
      obj_DDD.buscarDDDCallBack(ddd, dados => {
        console.log(dados);
        setUf(dados.state);
        setCities(dados.cities);
      });
    }
  }, [ddd]);

  return (
    <View style={styles.container}>
      <TextInput  
        style={[styles.input, { borderColor: emFoco ? '#F8BBD0' : '#F06292' }]}
        placeholder="Digite o DDD"
        placeholderTextColor="#F06292" 
        keyboardType="numeric"
        maxLength={2}
        value={ddd}
        onChangeText={text => setDDD(text.replace(/[^0-9]/g, ''))}
        onFocus={() => setEmFoco(true)}
        onBlur={() => setEmFoco(false)}
      />

      <View style={styles.View_lista}>
        <FlashList
          data={cities}
          renderItem={({ item, index }) => (
            <View style={styles.cityItem} key={index}>
              {}
              <Icon name="heart" size={20} color="#F06292" style={styles.heartIcon} />
              <CardCidade nome={item} uf={uf} />
            </View>
          )}
          estimatedItemSize={200}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0F0',  
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  input: {
    width: '90%',
    padding: 15,
    borderWidth: 2,
    borderRadius: 25, 
    marginVertical: 20,
    fontSize: 18,
    backgroundColor: '#fff', 
    color: '#F06292', 
    fontWeight: '500',
    shadowColor: "#F06292", 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, 
  },
  View_lista: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  cityItem: {
    flexDirection: 'row',  
    alignItems: 'center', 
    marginVertical: 10,
  },
  heartIcon: {
    marginRight: 10,  
  },
});
