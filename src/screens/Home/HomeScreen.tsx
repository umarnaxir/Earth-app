import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../../../App';
import { useTheme } from '../../theme/ThemeContext';
import { createStyles } from './HomeScreen.styles';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = () => {
  const [completed, setCompleted] = useState<Record<number, boolean>>({});
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const toggleCard = (index: number) => {
    setCompleted((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const total = 6;

  return (
    <SafeAreaView style={styles.root}>
      <View style={[styles.headerContainer, { paddingTop: insets.top || 12 }]}>
        <View style={styles.header}>
          <View style={styles.headerTitleBlock}>
            <Text style={styles.headerTitle}>The Earth</Text>
            <Text style={styles.headerSubTitle}>Discover Our Planet</Text>
          </View>
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>
              {completedCount}/{total} explored
            </Text>
          </View>
        </View>
        <View style={styles.hero}>
          <View style={styles.heroImageWrapper}>
            <Image
              source={require('../../assets/images/home.jpg')}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroTitle}>Our Beautiful Planet</Text>
            <Text style={styles.heroSubtitle}>
              Explore fascinating facts about Earth, its ecosystems, climate, and the importance of conservation.
            </Text>
            <Text style={styles.progressText}>
              Tap cards to learn more about different aspects of our planet.
            </Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>Earth Facts</Text>

        {/* Card 1 - Planet Overview */}
        <TouchableOpacity
          style={[styles.card, completed[0] && styles.cardCompleted]}
          onPress={() => toggleCard(0)}
          activeOpacity={0.8}
        >
          <View style={styles.icon}>
            <View
              style={[styles.iconDot, completed[0] && styles.iconDotCompleted]}
            />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Planet Overview</Text>
              <Text
                style={[
                  styles.cardStatus,
                  completed[0] && styles.cardStatusCompleted,
                ]}
              >
                {completed[0] ? 'Explored' : 'Tap to explore'}
              </Text>
            </View>
            <Text style={styles.cardBody}>
              Earth is the third planet from the Sun and the only astronomical object known to harbor life. It's approximately 4.54 billion years old.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 2 - Oceans */}
        <TouchableOpacity
          style={[styles.card, completed[1] && styles.cardCompleted]}
          onPress={() => toggleCard(1)}
          activeOpacity={0.8}
        >
          <View style={styles.icon}>
            <View
              style={[styles.iconDot, completed[1] && styles.iconDotCompleted]}
            />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Oceans & Water</Text>
              <Text
                style={[
                  styles.cardStatus,
                  completed[1] && styles.cardStatusCompleted,
                ]}
              >
                {completed[1] ? 'Explored' : 'Tap to explore'}
              </Text>
            </View>
            <Text style={styles.cardBody}>
              About 71% of Earth's surface is covered by water, with oceans holding approximately 97% of all water. The Pacific Ocean is the largest.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 3 - Climate */}
        <TouchableOpacity
          style={[styles.card, completed[2] && styles.cardCompleted]}
          onPress={() => toggleCard(2)}
          activeOpacity={0.8}
        >
          <View style={styles.icon}>
            <View
              style={[styles.iconDot, completed[2] && styles.iconDotCompleted]}
            />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Climate & Weather</Text>
              <Text
                style={[
                  styles.cardStatus,
                  completed[2] && styles.cardStatusCompleted,
                ]}
              >
                {completed[2] ? 'Explored' : 'Tap to explore'}
              </Text>
            </View>
            <Text style={styles.cardBody}>
              Earth's climate is influenced by its atmosphere, which contains 78% nitrogen, 21% oxygen, and trace amounts of other gases including carbon dioxide.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 4 - Biodiversity */}
        <TouchableOpacity
          style={[styles.card, completed[3] && styles.cardCompleted]}
          onPress={() => toggleCard(3)}
          activeOpacity={0.8}
        >
          <View style={styles.icon}>
            <View
              style={[styles.iconDot, completed[3] && styles.iconDotCompleted]}
            />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Biodiversity</Text>
              <Text
                style={[
                  styles.cardStatus,
                  completed[3] && styles.cardStatusCompleted,
                ]}
              >
                {completed[3] ? 'Explored' : 'Tap to explore'}
              </Text>
            </View>
            <Text style={styles.cardBody}>
              Earth is home to millions of species, from the deepest ocean trenches to the highest mountain peaks. Rainforests contain the highest biodiversity.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 5 - Conservation */}
        <TouchableOpacity
          style={[styles.card, completed[4] && styles.cardCompleted]}
          onPress={() => toggleCard(4)}
          activeOpacity={0.8}
        >
          <View style={styles.icon}>
            <View
              style={[styles.iconDot, completed[4] && styles.iconDotCompleted]}
            />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Conservation</Text>
              <Text
                style={[
                  styles.cardStatus,
                  completed[4] && styles.cardStatusCompleted,
                ]}
              >
                {completed[4] ? 'Explored' : 'Tap to explore'}
              </Text>
            </View>
            <Text style={styles.cardBody}>
              Protecting Earth's ecosystems is crucial. Reducing carbon footprint, recycling, and supporting renewable energy helps preserve our planet for future generations.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 6 - Natural Wonders */}
        <TouchableOpacity
          style={[styles.card, completed[5] && styles.cardCompleted]}
          onPress={() => toggleCard(5)}
          activeOpacity={0.8}
        >
          <View style={styles.icon}>
            <View
              style={[styles.iconDot, completed[5] && styles.iconDotCompleted]}
            />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Natural Wonders</Text>
              <Text
                style={[
                  styles.cardStatus,
                  completed[5] && styles.cardStatusCompleted,
                ]}
              >
                {completed[5] ? 'Explored' : 'Tap to explore'}
              </Text>
            </View>
            <Text style={styles.cardBody}>
              From the Grand Canyon to the Great Barrier Reef, Earth is filled with breathtaking natural wonders that showcase the planet's incredible diversity and beauty.
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionLabelSpaced}>Did You Know?</Text>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>🌍 Earth Statistics</Text>
          <Text style={styles.infoCardText}>
            • Circumference: ~40,075 km{'\n'}
            • Surface Area: ~510 million km²{'\n'}
            • Highest Point: Mount Everest (8,849 m){'\n'}
            • Deepest Point: Mariana Trench (11,034 m){'\n'}
            • Average Temperature: 15°C (59°F)
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>🌱 Environmental Impact</Text>
          <Text style={styles.infoCardText}>
            Every small action counts! By making sustainable choices in our daily lives, we can help protect Earth's delicate ecosystems and ensure a healthy planet for generations to come.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
