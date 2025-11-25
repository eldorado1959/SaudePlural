import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { global } from "../../styles/global";
import { router } from "expo-router";
import colors from "../../styles/colors";

export default function Home() {
  return (
    <ScrollView style={global.container}>

      <Text style={global.title}>Saúde Plural</Text>
      <Text style={{ color: colors.textLight, marginBottom: 20 }}>
        Bem-vindo! Escolha uma opção abaixo:
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          padding: 20,
          borderRadius: 16,
          marginBottom: 16,
        }}
        onPress={() => router.push("/(main)/dicas")}
      >
        <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600" }}>
          Dicas de Saúde
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: colors.secondary,
          padding: 20,
          borderRadius: 16,
          marginBottom: 16,
        }}
        onPress={() => router.push("/(main)/profissionais")}
      >
        <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600" }}>
          Profissionais
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#22c55e",
          padding: 20,
          borderRadius: 16,
        }}
        onPress={() => router.push("/(main)/sobre")}
      >
        <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600" }}>
          Sobre o Projeto
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
