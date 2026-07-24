import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { Screen } from '../../components/Screen';
import { colors } from '../../theme';
export function FeatureScreen({ title, icon, description }: { title: string; icon: keyof typeof Ionicons.glyphMap; description: string }) { return <Screen><View style={styles.center}><View style={styles.icon}><Ionicons name={icon} size={48} color={colors.green}/></View><Text style={styles.title}>{title}</Text><Text style={styles.description}>{description}</Text><AppButton title="Coming in next module" onPress={() => {}} style={{ alignSelf: 'stretch' }}/></View></Screen>; }
const styles = StyleSheet.create({ center: { flex: 1, paddingTop: 130, alignItems: 'center', gap: 14 }, icon: { width: 100, height: 100, borderRadius: 34, backgroundColor: colors.mint, alignItems: 'center', justifyContent: 'center' }, title: { color: colors.ink, fontSize: 25, fontWeight: '900' }, description: { color: colors.muted, textAlign: 'center', lineHeight: 22, paddingHorizontal: 20 } });
