import { StyleSheet, Text, View } from "react-native";

// Define the shape of the props our component expects
interface ProfileCardProps {
    name: string;
    studentId: string;
    department: string;
    bio: string;
}


//export default function ProfileCard(name: string, studentId: string, department: string, bio: string) 
export default function ProfileCard({ name, studentId, department, bio }: ProfileCardProps) {
    // Build initials from the name prop
    const initials = name 
        .split(" ") 
        .map((word) => word[0])
        .join("");

    return (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
            </View>

            {/* Use curly braces {} to insert JS variables into JSX */}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.idBadge}>ID: {studentId}</Text>
            <Text style={styles.role}>{department}</Text>

            <View style={styles.divider} />

            <Text style={styles.bio}>{bio}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#d4e8ff4a",
        borderRadius: 16,
        padding: 28,
        width: "85%",
        alignItems: "center",
        shadowColor: "#9fbaff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 44,
        backgroundColor: "#0D9488",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    avatarText: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#071333",
        marginBottom: 2,
    },
    idBadge: {
        fontSize: 14,
        color: "#085130",
        backgroundColor: "#E1F5EE",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        marginBottom: 4,
        overflow: "hidden",
    },
    role: {
        fontSize: 14,
        color: "#001e48",
        marginBottom: 16,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#0820415f",
        marginBottom: 10,
    },
    bio: {
        fontSize: 14,
        color: "#061d3e",
        textAlign: "center",
        lineHeight: 22,
    },
});
