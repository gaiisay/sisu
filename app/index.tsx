import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";

export default function Screen() {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <SafeAreaView>
      <View className="p-2 flex-1">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mx-auto flex-col gap-1.5"
        >
          <TabsList className="flex-row w-full gap-4">
            <TabsTrigger value="today" className="flex-1">
              <Text>Today</Text>
            </TabsTrigger>
            <TabsTrigger value="tomorrow" className="flex-1">
              <Text>Tomorrow</Text>
            </TabsTrigger>
            <TabsTrigger value="habits" className="flex-1">
              <Text>Habits</Text>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Text>test</Text>
          </TabsContent>
          <TabsContent value="password">
            <Text>test2</Text>
          </TabsContent>
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
