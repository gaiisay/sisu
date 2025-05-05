import { Link } from "expo-router";
import { Button, H1, Text, YStack } from "tamagui";

export default function NotFoundScreen() {
  return (
    <YStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding="$4"
      space="$4"
    >
      <H1 color="$color">404</H1>
      <Text fontSize="$6" textAlign="center">
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Link href="/" asChild>
        <Button theme="active" size="$4">
          Go Home
        </Button>
      </Link>
    </YStack>
  );
}
