import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <Text>404</Text>
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Link href="/" asChild>
        <Button title="Go Home" />
      </Link>
    </View>
  );
}
