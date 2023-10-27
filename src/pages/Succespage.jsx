import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  succesicon: {
    width: '100%',
    height: '100%',
    position: 'relative',
    position: 'absolute',
    background: 'white',
    width: 70.71,
    height: 50.09,
    left: 14.71,
    top: 25,
    position: 'relative'
  },
  succesion: {
    backgroundColor: '#6CF66C',
    borderRadius: 101,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 256,
    position: 'relative'
  },

  tombolkembali: {
    backgroundColor: 'red',
    alignSelf: 'center',
    height: 52,
    width: 314,
    borderRadius: 25,
    marginTop: 272,
  },
  tekskembali: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word',
    marginVertical: 15,
    alignSelf: 'center',
  },
  pesanansukses: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 752,
    height: 944,
   // transform: 'rotate(-8.68deg)',
    transformOrigin: '0 0',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
});

const succes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Astronot.png')}
        style={styles.backgroundImage}
      />
      <View>
        <View style={styles.succesion}>
          <Image
            source={require('../assets/icon/Frame2.png')}
            style={styles.succesicon}
          />
        </View>
        <Text style={styles.pesanansukses}>Pesanan sukses</Text>
        <TouchableOpacity>
        <View style={styles.tombolkembali}>
          <Text style={styles.tekskembali}>Kembali ke pemesanan </Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default succes;
