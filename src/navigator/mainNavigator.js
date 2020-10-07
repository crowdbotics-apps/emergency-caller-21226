import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile131900Navigator from '../features/UserProfile131900/navigator';
import Tutorial131899Navigator from '../features/Tutorial131899/navigator';
import NotificationList131871Navigator from '../features/NotificationList131871/navigator';
import Settings131870Navigator from '../features/Settings131870/navigator';
import Settings131862Navigator from '../features/Settings131862/navigator';
import UserProfile131860Navigator from '../features/UserProfile131860/navigator';
import UserProfile131838Navigator from '../features/UserProfile131838/navigator';
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
UserProfile131900: { screen: UserProfile131900Navigator },
Tutorial131899: { screen: Tutorial131899Navigator },
NotificationList131871: { screen: NotificationList131871Navigator },
Settings131870: { screen: Settings131870Navigator },
Settings131862: { screen: Settings131862Navigator },
UserProfile131860: { screen: UserProfile131860Navigator },
UserProfile131838: { screen: UserProfile131838Navigator },
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
