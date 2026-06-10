import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ThemedText style={styles.title}>Hello, Mobile App Development</ThemedText>
            <ThemedText style={styles.subtitle}>Semester: Summer 25-26</ThemedText>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1665b4",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        margin: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#d8e2fb",
        margin: 5,
    },
});
