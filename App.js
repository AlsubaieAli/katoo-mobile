import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.parentView}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <Text>Hello there</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    height: '100%',
    backgroundColor: 'blue',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // height: '100%',
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
