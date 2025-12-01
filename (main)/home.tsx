import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { global } from '../../styles/global';
import { router } from 'expo-router';


export default function Home() {
return (
<ScrollView style={global.container}>
<Header />
<Text style={global.title}>Olá, estudante</Text>
<Text style={global.subtitle}>Escolha uma das seções abaixo</Text>


<Card title="Dicas de Saúde" subtitle="Artigos e orientações" onPress={() => router.push('/(main)/dicas')} />
<Card title="Profissionais" subtitle="Contatos e especialidades" onPress={() => router.push('/(main)/profissionais')} />
<Card title="Sobre" subtitle="Informações sobre o projeto" onPress={() => router.push('/(main)/sobre')} />
</ScrollView>
);
}