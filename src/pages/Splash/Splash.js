import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => this.props.navigation.navigate('Dashboard'), 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.bg} source={logo} resizeMode="contain" /> */}
        <Text>Lasers in Dentistry</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
