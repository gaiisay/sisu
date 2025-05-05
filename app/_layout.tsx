import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider, YStack } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { StatusBar } from "expo-status-bar";
const config = createTamagui(defaultConfig);

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <StatusBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* <YStack
        flex={1}
        borderWidth={2}
        borderColor="$color"
        borderRadius="$4"
        gap="$2"
        padding="$2"
      >
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
      </YStack> */}
    </TamaguiProvider>
  );
}
