import React from 'react';
import { WebView } from 'react-native-webview';

export default class Dashboard extends React.Component {
  render() {
    return (
      <WebView source={{ uri: 'https://membros.ialaserdentistry.com/login' }} />
    );
  }
}
