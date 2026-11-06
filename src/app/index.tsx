import { View, Text, StyleSheet } from "react-native";

const inicio =()=>{
  return (
    <View>
      <Text>
        Mi primera App movil
      </Text>
    </View>
  )
}

export default inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
