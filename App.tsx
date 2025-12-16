import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/Home/HomeScreen';
import { AboutScreen } from './src/screens/About/AboutScreen';
import { MoreScreen } from './src/screens/More/MoreScreen';
import { EarthReadMoreScreen } from './src/screens/EarthReadMore/EarthReadMoreScreen';
import { colors } from './src/theme/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Info, MoreHorizontal } from 'lucide-react-native';

export type RootTabParamList = {
  Home: undefined;
  About: undefined;
  More: undefined;
};

export type AboutStackParamList = {
  AboutMain: undefined;
  EarthReadMore: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const AboutStack = createNativeStackNavigator<AboutStackParamList>();

function AboutStackNavigator() {
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
}

type TabIconProps = {
  color: string;
  size?: number;
  focused?: boolean;
};

const HomeIcon = ({ color, size = 24 }: TabIconProps) => (
  <Home size={size} color={color} />
);

const AboutIcon = ({ color, size = 24 }: TabIconProps) => (
  <Info size={size} color={color} />
);

const MoreIcon = ({ color, size = 24 }: TabIconProps) => (
  <MoreHorizontal size={size} color={color} />
);

function TabNavigator() {
  const insets = useSafeAreaInsets();
  
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
}

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;


