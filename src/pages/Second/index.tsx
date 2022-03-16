import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable, VirtualizedList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SecondProps {
  navigation?:any;
  route?:any;
}
const colorData = [
  {
    id:'1', color:'red' ,title:"RED"
  },
  {
    id:'2', color:'green' ,title:"GREEN"
  },
  {
    id:'3', color:'blue' ,title:"BLUE"
  }
  ,
  {
    id:'4', color:'orange' ,title:"ORANGE"
  }
  ,
  {
    id:'5', color:'steelblue' ,title:"STEELBLUE"
  }
  ,
  {
    id:'6', color:'violet' ,title:"VIOLET"
  }
]
const getItemCount = (data) => 6;
const getItem =(data, index) =>({
  id: Math.random().toString(12).substring(0),
  title: colorData[index].title,
  color: colorData[index].color
})

export default function Second(props: SecondProps) {
  const { navigation, route } = props;
  const [color, setColor] = React.useState('red');
  const Item = ({color, title}) =>(
    <View style={[styles.itemStyle,{backgroundColor:color}]}>
      <Text style={styles.itemText}>{title}</Text>
      <Text onPress={()=> setColor(color)} style={styles.itemButton}>SELECT</Text>
    </View>
  )
  return (
    <View style={styles.container}>
    <View style={styles.headerSection}>
      <Pressable style={[styles.profileCircle,{backgroundColor:color}]}>
        <Text style={styles.buttonText}>{route.params.count}</Text>
      </Pressable>
      <Text style={styles.profileText}>{route.params.name}</Text>
    </View>
    <SafeAreaView style={styles.mainSection}>
          <VirtualizedList 
              data={colorData}
              initialNumToRender={3}
              renderItem={({item}) => <Item  title={item.title} color={item.color}/>}
              keyExtractor={item => item.id}
              getItemCount={getItemCount}
              getItem={getItem}
          />
    </SafeAreaView>
   
    <View style={styles.footerSection}>
      <Pressable style={styles.button} onPress={()=> navigation.navigate('First')}>
          <Text style={styles.buttonText}>Back</Text>
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
  profileCircle:{
    width:100,
    height:100,
    borderRadius: 1000,
    borderWidth:2,
    borderColor:'blue',
    marginLeft:'auto',
    marginRight:'auto',
    textAlign:'center',
    color:'white',
    lineHeight:80,
    fontSize:23
  },
   profileText:{
    marginLeft:'auto',
    marginRight:'auto'
  },
  input:{
    height: 20,
    width:'60%',
    borderColor:'green',
    color:'black',
    borderWidth:1,
    borderRadius: 8,
    padding: 20
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
  },
  itemStyle:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:22,
    margin:7
  },
  itemText:{
    color:'white',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  itemButton:{
    width:100,
    padding:10,
    backgroundColor:'gray',
    textAlign:'center',
    color:'white'
  }
});
