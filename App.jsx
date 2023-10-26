import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <View style= {{
        height: 52,
        marginHorizontal: 16,
        backgroundColor: 'red',
        marginTop: 16,
        borderRadius: 99,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        }}> 
        <Image source={require('./src/assets/images/tentang.png')} 
        style={{
          width: 140,
          height: 32,
        }}/> 

        <Image source={require('./src/assets/images/Frame.png')} 
        style= {{
          width:20,
          height: 20,
        }}/>

      </View>
        <View>

        <Text style={{
        color: '#FF0000',
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: '200',
        wordWrap: 'break-word',
        marginTop: 32,
        marginLeft: 16,
        marginBottom: 4,
        marginRight: 225,
        }} >Selamat datang di</Text> 

        <Text style={{// Kantin Multistudi
        color: 'black',
        fontSize: 24,
        fontFamily: 'DM Sans',
        fontWeight: '700',
        wordWrap: 'break-word',
        marginLeft: 16,
        marginBottom: 32
        }}>
        Kantin Multistudi
        </Text>

        </View>
        <View>
        <Text style={{
          color: 'black', 
          fontSize: 18, 
          fontFamily: 'Inter', 
          fontWeight: '600', 
          wordWrap: 'break-word',
          marginLeft: 9,
          marginBottom: 1,
          fontWeight: 'bold'}}>
          Menu Makanan
        </Text>
        </View>
            <View style={{
              marginTop: 6,
              flexDirection: 'row',
              borderWidth: 1,
            }}>
                    <View style={{
                      
                      backgroundColor: 'pink',
                      padding: 12,
                      flex: 1,
                      borderWidth: 1, }}>

                          <View style={{
                              height: 150,
                              backgroundColor: 'red',
                              borderWidth: 1,
                              borderRadius: 6}}>
                          </View>
                          <Text>
                            Spaggethie
                          </Text>
                          <Text>
                            Rp 25.000
                          </Text>

                    
                    
                    </View>
                    <View style={{
                      
                      backgroundColor: 'pink',
                      padding: 12,
                      flex: 1,
                      borderWidth: 1, }}>

                          <View style={{
                              height: 150,
                              backgroundColor: 'red',
                              borderWidth: 1,
                              borderRadius: 6}}> 

                              <Image source={(uri = 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS.jpg')}></Image>
                          </View>
                          <Text>
                            Spaggethie
                          </Text>
                          <Text>
                            Rp 25.000
                          </Text>

                    
                    
                    </View>
                    
            </View>
           



    </View>
  )
}

export default App