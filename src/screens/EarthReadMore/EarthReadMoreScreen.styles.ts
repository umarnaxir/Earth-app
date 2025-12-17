import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/ThemeContext';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  headerSubTitle: {
    color: colors.textSecondary,
    marginTop: 4,
    fontSize: 13,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
  paragraph: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 16,
  },
  infoBlock: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoTitle: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
  },
  infoText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
  },
  secondaryButton: {
    marginTop: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
});
