import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors } from '../theme';
export function AppButton({ title, onPress, variant = 'primary', style }: { title: string; onPress: () => void; variant?: 'primary' | 'outline'; style?: ViewStyle }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.base, variant === 'primary' ? styles.primary : styles.outline, pressed && { opacity: .8 }, style]}><Text style={variant === 'primary' ? styles.primaryText : styles.outlineText}>{title}</Text></Pressable>;
}
const styles = StyleSheet.create({ base: { height: 54, justifyContent: 'center', alignItems: 'center', borderRadius: 16 }, primary: { backgroundColor: colors.green }, outline: { borderWidth: 1, borderColor: colors.green, backgroundColor: colors.surface }, primaryText: { color: '#fff', fontSize: 16, fontWeight: '800' }, outlineText: { color: colors.green, fontSize: 16, fontWeight: '800' } });
