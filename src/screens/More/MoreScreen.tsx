import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { createStyles } from './MoreScreen.styles';

export const MoreScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { colors, isDarkMode, toggleTheme } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.root}>
      <View style={[styles.headerContainer, { paddingTop: insets.top || 12 }]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>More</Text>
          <Text style={styles.headerSubTitle}>Additional options and settings</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Settings</Text>
        
        <TouchableOpacity 
          style={styles.themeToggle} 
          activeOpacity={0.8}
          onPress={toggleTheme}
        >
          <Text style={styles.themeToggleText}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
          <Text style={styles.themeToggleIcon}>
            {isDarkMode ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuItemText}>Notifications</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuItemText}>Privacy</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuItemText}>Language</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

 
        <Text style={styles.sectionTitle}>Support</Text>
        
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuItemText}>Help Center</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuItemText}>Contact Us</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuItemText}>Terms of Service</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Pilot Project</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
