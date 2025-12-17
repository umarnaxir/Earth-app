import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AboutStackParamList } from '../../navigation/types';
import { useTheme } from '../../theme/ThemeContext';
import { createStyles } from './AboutScreen.styles';

type Props = NativeStackScreenProps<AboutStackParamList, 'AboutMain'>;

export const AboutScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.root}>
      <View style={[styles.headerContainer, { paddingTop: insets.top || 12 }]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>About Earth</Text>
          <Text style={styles.headerSubTitle}>Our Home Planet</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>About Earth Explorer</Text>
        <Text style={styles.paragraph}>
          Earth Explorer is an educational app dedicated to helping you discover fascinating facts about our beautiful planet. Learn about Earth's geography, climate, biodiversity, and the importance of conservation.
        </Text>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌍 Planet Earth</Text>
          <Text style={styles.infoText}>
            Earth is the only known planet in the universe that supports life. It's located in the habitable zone of our solar system, with the perfect distance from the Sun to maintain liquid water and a stable climate.
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌊 Key Features</Text>
          <Text style={styles.infoText}>
            • 71% covered by oceans{'\n'}
            • Diverse ecosystems and climates{'\n'}
            • Rich biodiversity{'\n'}
            • Unique atmosphere supporting life{'\n'}
            • Dynamic geological activity
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌱 Our Mission</Text>
          <Text style={styles.infoText}>
            Through education and awareness, we aim to inspire people to appreciate and protect our planet. Every action counts in preserving Earth for future generations.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Fun Facts</Text>
        <Text style={styles.paragraph}>
          • Earth rotates at about 1,670 km/h at the equator{'\n'}
          • The planet travels around the Sun at 107,000 km/h{'\n'}
          • Earth's core is as hot as the Sun's surface{'\n'}
          • 99% of Earth's living space is in the ocean{'\n'}
          • The Amazon rainforest produces 20% of the world's oxygen
        </Text>

        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={() => navigation.navigate('EarthReadMore')}
          activeOpacity={0.7}
        >
          <Text style={styles.readMoreButtonText}>Read More</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
