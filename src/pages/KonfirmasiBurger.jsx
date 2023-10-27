import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  ellipse: {
    backgroundColor: 'red',
    borderRadius: 25,
    width: 50,
    height: 50,
    margin: 16,
  },
  arrow: {
    borderRadius: 25,
    width: 40,
    height: 40,
    margin: 4,
  },

  displayimage: {
    width: 328,
    height: 218,
    alignItems: 'center',
    padding: 16,
    margin: 16,
    flex: 1,
    display: 'flex',
    borderRadius: 8,
    marginBottom: 0,
  },
  rowcontainer: {
    marginTop: 6,
    flexDirection: 'row',
  },
  container: {
    padding: 16,
    flex: 1,
  },

  textcontainer: {
    padding: 16,
    flex: 1,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '900',
  },
  pricecontainer: {
    padding: 16,
    color: '#FF0000',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },

  desccontainer: {
    color: '#FF0000',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '100',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  line: {
    width: 400,
    height: 1,
    backgroundColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 4,
  }, internput: {
    color: 'black',
    placeholder: "Masukkan Jumlah",
    backgroundColor: '#BDBDBD',
    margin: 16,
    marginTop: 4,
   
    borderRadius: 6,
  },
  succesbutton: {
    backgroundColor: 'red',
  },
confirmbutton: {
  width: 200,
  height: 50,
  backgroundColor: 'red',
  alignSelf: 'center',
  borderRadius: 25,
},
kembali : {
  marginTop: 20,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
},
jumlahpesanan : {
  color: 'black',
  margin: 8,
  marginTop: 20,
  marginLeft: 32,
  fontFamily: 'Inter',
  fontSize: 12,
},
konfirmasi: {
  alignContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  margin: 16,
}
});

const Burger = ({navigation}) => {
  return (
    <View>
      <View style={style.rowcontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={style.ellipse}>
          <Image
            source={require('../assets/icon/Frame.png')}
            style={style.arrow}
          /> 
          
             </View>
      </TouchableOpacity>
      <Text style={style.kembali}>
        Kembali
      </Text>
      </View>
      <View style={style.rowcontainer}>
        <Image
          source={require('../assets/images/Burger.jpg')}
          style={style.displayimage}
        /> 
      </View>
      <View style={style.rowcontainer}>
        <Text style={style.textcontainer}>Burger</Text>
        <Text style={style.pricecontainer}>Rp 25.000,00</Text>
      </View>
      <View style={style.rowcontainer}>
        <Text style={style.desccontainer}>
          Lorem ipsum dolor sit amet. Ut corporis distinctio et iste maiores aut
          iure sint. Ut internos aliquid 33 eligendi odit At delectus voluptatum
          sit internos quam qui galisum deserunt sed dolor maxime.
        </Text>
      </View>
      <Text style={style.line}> </Text>
      <Text style={style.jumlahpesanan}> Masukkan jumlah pemesanan</Text>
      <View>
      <TextInput style={style.internput} />
      </View>

      <TouchableOpacity>
      <View>
      <View style={style.confirmbutton} >
        <Text style={style.konfirmasi}> Konfirmasi </Text>
      </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Burger;
