import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';
export function MetricCard({ icon, label, value, detail, tone = colors.mint }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string; detail: string; tone?: string }) {
  return <View style={styles.card}><View style={[styles.icon, { backgroundColor: tone }]}><Ionicons name={icon} size={19} color={colors.forest} /></View><Text style={styles.label}>{label}</Text><Text style={styles.value}>{value}</Text><Text style={styles.detail}>{detail}</Text></View>;
}
const styles = StyleSheet.create({ card: { width: '48%', backgroundColor: colors.surface, borderRadius: 20, padding: 14, gap: 5 }, icon: { width: 36, height: 36, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }, label: { color: colors.muted, fontSize: 12, fontWeight: '700' }, value: { color: colors.ink, fontSize: 22, fontWeight: '800' }, detail: { color: colors.muted, fontSize: 11 } });
