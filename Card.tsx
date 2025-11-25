import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';


type Props = {
title: string;
subtitle?: string;
onPress?: () => void;
};


export default function Card({ title, subtitle, onPress }: Props) {
return (
<TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
<Text style={styles.title}>{title}</Text>
{subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
card: {
backgroundColor: colors.card,
padding: 16,
borderRadius: 12,
marginBottom: 12,
elevation: 2
},
title: {
fontSize: 16,
fontWeight: '700',
color: colors.textDark,
marginBottom: 4
},
subtitle: {
fontSize: 14,
color: colors.textMuted
}
});