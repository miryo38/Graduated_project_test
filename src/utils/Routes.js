import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStackNavigator from '../navigators/AuthStackNavigator';
<<<<<<< HEAD
import AppStack from '../navigators/AppStack';

=======
import AppNavigator from '../navigators/AppStackNavigator';
>>>>>>> ca0d5b6a4b67b45bf1ba303281a1258f1943687d

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
<<<<<<< HEAD
      {user ? <AppStack /> : <AuthStackNavigator />}
=======
      {user ? <AppNavigator /> : <AuthStackNavigator />}
>>>>>>> ca0d5b6a4b67b45bf1ba303281a1258f1943687d
    </NavigationContainer>
  );
};

export default Routes;
