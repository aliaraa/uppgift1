import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';


export default function HomeScreen() {
  return (
   
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>

      <View style={{flex: 0.2, backgroundColor: 'red', margin: 2, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>RÖD</Text>
      </View>

      <View style={{flexDirection: 'row', flex: 0.25, margin: 2}}>
      <View style={{flex: 1, backgroundColor: 'green', marginRight: 2}}>
      <Text style={{fontSize: 20, padding: 5}}>GRÖN</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'yellow', marginLeft: 2}}>
      </View>
      </View>

      <View style={{flexDirection: 'row', flex: 0.15, margin: 2}}>
      <View style={{flex: 3, backgroundColor: 'red', marginRight: 2}}>
      </View>
      <View style={{flex: 1, backgroundColor: 'black', marginLeft: 2}}>
      </View>
      </View>
      
      <View style={{flex: 1, backgroundColor: 'lightblue', margin: 2}}>
      </View>

      <View style={{flex: 0.1, backgroundColor: 'orange', margin: 2, alignItems: 'flex-end', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, marginRight: 5}}>ORANGE</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
