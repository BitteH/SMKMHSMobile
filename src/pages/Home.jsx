import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  selamatdatang: {
    color: '#FF0000',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '200',
    marginTop: 32,
    marginLeft: 16,
    marginBottom: 4,
    marginRight: 225,
  },
  kantinmultistudi: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'DM Sans',
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 32,
  },
  segs: {
    height: 52,
    marginHorizontal: 16,
    backgroundColor: 'red',
    marginTop: 16,
    borderRadius: 99,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  container: {
    padding: 12,
    flex: 1,
  },

  card: {
    height: 150,
    borderRadius: 6,
    width: 190,
    height: 150,
  },
  rowcontainer: {
    marginTop: 6,
    flexDirection: 'row',
  },

  foodname: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontWeight: 'bold',
  },
  foodprice: {
    color: '#FF0000',
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontWeight: 'bold',
  },
  menumakanan: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '600',
    marginLeft: 9,
    marginBottom: 1,
    fontWeight: 'bold',
  },
});

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.segs}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            source={require('../assets/images/tentang.png')}
            style={{
              width: 140,
              height: 32,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            source={require('../assets/images/Frame.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.selamatdatang}>Selamat datang di</Text>

        <Text style={styles.kantinmultistudi}>Kantin Multistudi</Text>
      </View>
      <View>
        <Text style={styles.menumakanan}>Menu Makanan</Text>
      </View>
      <View style={styles.rowcontainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('KonfirmasiBurger')}>
            <View>
              <Image
                source={require('../assets/images/Burger.jpg')}
                style={styles.card}
              />
            </View>
            <Text style={styles.foodname}>Burger</Text>
            <Text style={styles.foodprice}>Rp 25.000,00</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View>
              <Image
                source={require('../assets/images/pasta-puttanesca.jpg')}
                style={styles.card}
              />
            </View>
            <Text style={styles.foodname}>Pasta</Text>
            <Text style={styles.foodprice}>Rp 25.000,00</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.menumakanan}>Menu Minuman</Text>
      </View>
      <View style={styles.rowcontainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View>
              <Image
                source={require('../assets/images/coke.jpg')}
                style={styles.card}
              />
            </View>
            <Text style={styles.foodname}>Cocaine</Text>
            <Text style={styles.foodprice}>Rp 8.000,00</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View>
              <Image
                source={require('../assets/images/wine.jpg')}
                style={styles.card}
              />
            </View>
            <Text style={styles.foodname}>Finest Wine</Text>
            <Text style={styles.foodprice}>Rp 529.000,00</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
