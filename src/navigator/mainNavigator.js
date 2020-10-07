import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps131819Navigator from '../features/Maps131819/navigator';
import Settings131797Navigator from '../features/Settings131797/navigator';
import Settings131782Navigator from '../features/Settings131782/navigator';
import NotificationList131781Navigator from '../features/NotificationList131781/navigator';
import Maps131780Navigator from '../features/Maps131780/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps131819: { screen: Maps131819Navigator },
Settings131797: { screen: Settings131797Navigator },
Settings131782: { screen: Settings131782Navigator },
NotificationList131781: { screen: NotificationList131781Navigator },
Maps131780: { screen: Maps131780Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
