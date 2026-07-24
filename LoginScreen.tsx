import { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';
export function Screen({ children, scroll = true, style }: { children: ReactNode; scroll?: boolean; style?: ViewStyle }) {
  const content = scroll ? <ScrollView contentContainerStyle={[styles.content, style]} showsVerticalScrollIndicator={false}>{children}</ScrollView> : children;
  return <SafeAreaView style={styles.safe}>{content}</SafeAreaView>;
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.background }, content: { padding: 20, paddingBottom: 110, gap: 16 } });
