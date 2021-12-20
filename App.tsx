import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IUser } from './src/common/types/types';
import AppNavigation from './src/navigation/AppNavigation';
import { ContextProvider } from './src/provider/provider';

const queryClient = new QueryClient();

export default function App() {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    'FiraSans-Regular': require('./src/res/assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans-Medium': require('./src/res/assets/fonts/FiraSans-Medium.ttf'),
    'FiraSans-Bold': require('./src/res/assets/fonts/FiraSans-Bold.ttf'),
  });

  useEffect(() => {
    AsyncStorage.getItem('@storage_Key').then((value) => {
      if (value) {
        setUser(JSON.parse(value));
      }
      setIsLoaded(true);
    });
  }, []);

  if (!fontsLoaded || !isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ContextProvider initialState={{ user }}>
          <QueryClientProvider client={queryClient}>
            <AppNavigation />
            <StatusBar />
          </QueryClientProvider>
        </ContextProvider>
      </>
    );
  }
}
