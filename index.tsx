import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { global } from '../../../../styles/global';
import ListItem from '../../../components/ListItem';


const DATA = [
{ id: '1', title: 'Higiene das mãos', subtitle: 'Práticas essenciais' },
{ id: '2', title: 'Cuidados com feridas', subtitle: 'Passo a passo' },
{ id: '3', title: 'Alimentação saudável', subtitle: 'Dicas práticas' }
];


export default function Dicas() {
return (
<View style={global.container}>
<Text style={global.title}>Dicas</Text>
<FlatList
data={DATA}
keyExtractor={(i) => i.id}
renderItem={({ item }) => <ListItem title={item.title} subtitle={item.subtitle} />}
/>
</View>}