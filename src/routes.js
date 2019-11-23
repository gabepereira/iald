import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Splash, Dashboard } from './pages';

export default createAppContainer(
  createSwitchNavigator(
    {
      Dashboard,
      Splash,
    },
    {
      mode: 'modal',
      initialRouteName: 'Splash',
    },
  ),
);
