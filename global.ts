import { StyleSheet } from 'react-native';
import colors from './colors';


export const global = StyleSheet.create({
container: {
flex: 1,
backgroundColor: colors.background,
paddingHorizontal: 20,
paddingTop: 20,
},
title: {
fontSize: 24,
color: colors.textDark,
fontWeight: '700',
marginBottom: 8
},
subtitle: {
fontSize: 16,
color: colors.textMuted,
marginBottom: 16
},
card: {
backgroundColor: colors.card,
padding: 16,
borderRadius: 12,
marginBottom: 12,
shadowColor: '#000',
shadowOpacity: 0.05,
shadowRadius: 8,
elevation: 2
}
});