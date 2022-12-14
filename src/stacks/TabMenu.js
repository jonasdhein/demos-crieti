import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewUsers from '../screens/ViewUsers';

const Drawer = createDrawerNavigator();

function TabMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ViewUsers" component={ViewUsers} />
    </Drawer.Navigator>
  );
}

export default TabMenu;