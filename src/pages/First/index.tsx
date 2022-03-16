import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import axios from 'axios'

interface FirstProps {
  navigation?:any;
  route?:any;
}
export default function First(props: FirstProps) {
    const { navigation } = props;
    const [imageUrl, setImageUrl] = React.useState();
    const [name, setName] = React.useState('Undefined')
    const [count, setCount] = React.useState(0);
    const [inputText, setInputText] = React.useState('');
    if(!imageUrl)
      getRandomUser();
    function getRandomUser (){
      axios.defaults.baseURL = 'https://randomuser.me';
      axios.get("/api")
      .then(res => {
        let {data} = res;
        console.log('d', data)
        setImageUrl(data.results[0].picture.medium || '');
        setName(data.results[0].name.first + ' ' +  data.results[0].name.last || 'Undefined');
        console.log(data.results[0].picture.medium || '')
      })
      .catch(() => {
      });
    }
    return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        {imageUrl && <Image style={styles.profileLogo} source={{uri: imageUrl}}/>}
        <Text style={styles.profileText}>{name}</Text>
      </View>
      <View style={styles.mainSection}>
          <Pressable style={styles.button} onPress={()=> { console.log('333');setCount(count - 1)}}>
              <Text style={[styles.buttonText, {fontSize:25}]}>-</Text>
          </Pressable>
          <Text style={styles.countText}>{count}</Text>
          <Pressable style={styles.button} onPress={()=> setCount(count + 1)}>
              <Text style={[styles.buttonText, {fontSize:25}]}>+</Text>
          </Pressable>
      </View>
      <View style={styles.inputSection}>
          <TextInput 
            style={styles.input} 
            onChangeText={setInputText}
            value={inputText}
            placeholder={'Enter Text Here ...'}
            selectionColor="red"
          />
      </View>
      <View style={styles.footerSection}>
        <Pressable style={styles.button} onPress={()=> navigation.navigate('Second', {count:count, name:inputText})}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width:'100%',
    height:'100%',
  },
  profileLogo:{
    width:100,
    height:100,
    borderRadius: 1000,
    borderColor:'blue',
    borderWidth:2,
    marginLeft:'auto',
    marginRight:'auto'
  },
   profileText:{
    marginLeft:'auto',
    marginRight:'auto'
  },
  inputSection:{
    height: 80,
    width:'60%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  input:{
    height: 60,
    paddingTop:15,
    paddingBottom:15,
    width:'100%',
    borderColor:'green',
    color:'black',
    borderWidth:1,
    borderRadius: 8,
  },
  headerSection:{
    display:'flex',
    flex:1,
    justifyContent:'center',
  },
  mainSection:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
  }, 
  footerSection:{
    flex:1,
    justifyContent:'center',
  },
  button:{
    backgroundColor:'green',
    borderRadius:1000,
    width:80,
    height:80,
    marginTop:'auto',
    marginBottom:'auto',
    marginLeft:'auto',
    marginRight:'auto'
  },
  buttonText:{
    color:'white',
    marginTop:'auto',
    marginBottom:'auto',
    marginLeft:'auto',
    marginRight:'auto'
  },
  countText:{
    padding:20,
    fontSize:24,
    fontWeight:'800',
    marginTop:'auto',
    marginBottom:'auto'
  }
});
