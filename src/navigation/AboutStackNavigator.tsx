import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from '../screens/About/AboutScreen';
import { EarthReadMoreScreen } from '../screens/EarthReadMore/EarthReadMoreScreen';
import { useTheme } from '../theme/ThemeContext';
import { AboutStackParamList } from './types';

const AboutStack = createNativeStackNavigator<AboutStackParamList>();

export const AboutStackNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <AboutStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <AboutStack.Screen name="AboutMain" component={AboutScreen} />
      <AboutStack.Screen name="EarthReadMore" component={EarthReadMoreScreen} />
    </AboutStack.Navigator>
  );
};

