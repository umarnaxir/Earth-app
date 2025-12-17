import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AboutStackParamList } from '../../../App';
import { useTheme } from '../../theme/ThemeContext';
import { createStyles } from './EarthReadMoreScreen.styles';

type Props = NativeStackScreenProps<AboutStackParamList, 'EarthReadMore'>;

export const EarthReadMoreScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.root}>
      <View style={[styles.headerContainer, { paddingTop: insets.top || 12 }]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>More About Earth</Text>
          <Text style={styles.headerSubTitle}>Deep Dive into Our Planet</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>🌍 Earth's Formation</Text>
        <Text style={styles.paragraph}>
          Earth formed approximately 4.54 billion years ago from the solar nebula. Over millions of years, 
          the planet cooled and developed a solid crust, allowing liquid water to exist on its surface. 
          This unique combination of factors made Earth the perfect environment for life to emerge and thrive.
        </Text>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌊 The Hydrosphere</Text>
          <Text style={styles.infoText}>
            Earth's water system is incredibly complex and vital. The oceans contain about 1.35 billion 
            cubic kilometers of water, which regulates the planet's temperature and supports countless 
            marine ecosystems. The water cycle continuously moves water between oceans, atmosphere, and land, 
            making life possible on every continent.
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌬️ The Atmosphere</Text>
          <Text style={styles.infoText}>
            Earth's atmosphere extends about 10,000 kilometers above the surface. It's composed of 78% 
            nitrogen, 21% oxygen, and trace amounts of other gases. The ozone layer protects life from 
            harmful ultraviolet radiation, while the greenhouse effect maintains temperatures suitable for 
            liquid water and life.
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌋 Geological Activity</Text>
          <Text style={styles.infoText}>
            Earth is the only planet in our solar system with active plate tectonics. The movement of 
            tectonic plates creates mountains, causes earthquakes, and forms new crust. This geological 
            activity recycles nutrients and minerals, contributing to the planet's ability to support life.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>🌱 Biodiversity Hotspots</Text>
        <Text style={styles.paragraph}>
          Earth is home to an estimated 8.7 million species, though scientists believe many more remain 
          undiscovered. Biodiversity hotspots like the Amazon rainforest, coral reefs, and tropical 
          regions contain the highest concentrations of species. These ecosystems are crucial for 
          maintaining ecological balance and providing essential services like oxygen production and 
          carbon sequestration.
        </Text>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌡️ Climate Zones</Text>
          <Text style={styles.infoText}>
            Earth has diverse climate zones ranging from polar ice caps to tropical rainforests. These 
            zones are determined by latitude, altitude, and proximity to oceans. The variety of climates 
            supports different ecosystems and allows for incredible biodiversity across the planet.
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>🌙 Earth's Moon</Text>
          <Text style={styles.infoText}>
            Earth's moon plays a crucial role in stabilizing the planet's axial tilt, which helps maintain 
            relatively stable seasons. The moon's gravitational pull creates tides in the oceans, which 
            have influenced the evolution of marine life and coastal ecosystems.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>🛡️ Protecting Our Planet</Text>
        <Text style={styles.paragraph}>
          As the only known planet with life, Earth is incredibly precious. Climate change, pollution, 
          deforestation, and loss of biodiversity threaten the delicate balance that makes life possible. 
          It's our responsibility to protect and preserve Earth for future generations through sustainable 
          practices, conservation efforts, and environmental awareness.
        </Text>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.secondaryButtonText}>Back to About</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
