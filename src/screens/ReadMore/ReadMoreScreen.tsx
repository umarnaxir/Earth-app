import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import { styles } from './ReadMoreScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ReadMore'>;

export const ReadMoreScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.root}>
      <View style={[styles.headerContainer, { paddingTop: insets.top || 12 }]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Read more</Text>
          <Text style={styles.headerSubTitle}>What is happening in this app</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.paragraph}>
          This small project is designed to help you understand the basics of a React Native app:
          how screens are structured, how components are styled, and how you can move between
          different pieces of UI.
        </Text>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Folder structure</Text>
          <Text style={styles.infoText}>
            - App.tsx: entry point, sets up the navigation stack.{'\n'}
            - src/screens/HomeScreen.tsx: the main home UI.{'\n'}
            - src/screens/ReadMoreScreen.tsx: this page.{'\n'}
            - src/theme/colors.ts: shared color palette.
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Try editing</Text>
          <Text style={styles.infoText}>
            Open these files and try changing text, colors and spacing. Save the file and watch the
            app reload on your device or simulator.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.secondaryButtonText}>Back to home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
