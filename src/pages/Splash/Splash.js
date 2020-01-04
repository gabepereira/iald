import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import logo from '../../assets/images/logo.jpg';

export default class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => this.props.navigation.navigate('Dashboard'), 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} resizeMode="contain" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  logo: {
    width: '100%',
  },
});
