import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';


export default function ListItem({ title, subtitle, onPress }: any) {
return (
<TouchableOpacity style={styles.row} onPress={onPress}>
<Image source={require('../assets/placeholder.png')} style={styles.img} />
<View style={{ flex: 1 }}>
<Text style={styles.title}>{title}</Text>
{subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
</View>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
row: {
flexDirection: 'row',
gap: 12,
alignItems: 'center',
padding: 12,
backgroundColor: colors.card,
borderRadius: 12,
marginBottom: 12
},
img: { width: 62, height: 62, borderRadius: 8 }
,
title: { fontWeight: '700', color: colors.textDark },
subtitle: { color: colors.textMuted }
});