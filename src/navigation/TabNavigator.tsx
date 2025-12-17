import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { MoreScreen } from '../screens/More/MoreScreen';
import { useTheme } from '../theme/ThemeContext';
import { AboutStackNavigator } from './AboutStackNavigator';
import { HomeIcon, AboutIcon, MoreIcon } from './TabIcons';
import { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 8,
          height: insets.bottom > 0 ? 60 + insets.bottom : 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          tabBarIcon: AboutIcon,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: MoreIcon,
        }}
      />
    </Tab.Navigator>
  );
};

