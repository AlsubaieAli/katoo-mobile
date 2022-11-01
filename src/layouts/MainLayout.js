import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <View style={styles.layoutView}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle='default' />
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutView: {
    flex: 1,
    height: '100%',
    backgroundColor: 'blue',
  },
  safeArea: {
    flex: 1,
  },
});