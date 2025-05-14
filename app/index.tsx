import React, { useState } from "react";
import {
  H1,
  YStack,
  Separator,
  Tabs,
  SizableText,
  H5,
  TabsContentProps,
  isWeb,
  Input,
  Button,
  XStack,
  Card,
  Checkbox,
} from "tamagui";
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <YStack
          padding="$4"
          flex={1}
          paddingHorizontal="$4"
          {...(isWeb && {
            position: "unset" as any,
          })}
        >
          <H1 size="$9">Sisu</H1>
          <HorizontalTabs />
        </YStack>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const TodoList = () => {
  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo("");
      Keyboard.dismiss();
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <YStack space="$4" padding="$2">
        <XStack space="$2">
          <Input
            flex={1}
            value={newTodo}
            onChangeText={setNewTodo}
            placeholder="Add a new todo..."
            onSubmitEditing={addTodo}
            returnKeyType="done"
          />
          <Button onPress={addTodo}>Add</Button>
        </XStack>

        <YStack space="$2">
          {todos.map((todo) => (
            <Card key={todo.id} bordered padded>
              <XStack space="$2" alignItems="center">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <SizableText
                  flex={1}
                  textDecorationLine={todo.completed ? "line-through" : "none"}
                  opacity={todo.completed ? 0.5 : 1}
                >
                  {todo.text}
                </SizableText>
                <Button
                  size="$2"
                  theme="red"
                  onPress={() => removeTodo(todo.id)}
                >
                  Remove
                </Button>
              </XStack>
            </Card>
          ))}
        </YStack>
      </YStack>
    </TouchableWithoutFeedback>
  );
};

const HorizontalTabs = () => {
  return (
    <Tabs defaultValue="today" orientation="horizontal" flexDirection="column">
      <Tabs.List gap="$2" aria-label="Manage your account">
        <Tabs.Tab
          focusStyle={{
            backgroundColor: "$color3",
          }}
          flex={1}
          value="today"
          borderRadius="$4"
        >
          <SizableText fontFamily="$body" textAlign="center">
            Today
          </SizableText>
        </Tabs.Tab>
        <Tabs.Tab
          focusStyle={{
            backgroundColor: "$color3",
          }}
          flex={1}
          value="tomorrow"
          borderRadius="$4"
        >
          <SizableText fontFamily="$body" textAlign="center">
            Tomorrow
          </SizableText>
        </Tabs.Tab>
        <Tabs.Tab
          focusStyle={{
            backgroundColor: "$color3",
          }}
          flex={1}
          value="other"
          borderRadius="$4"
        >
          <SizableText fontFamily="$body" textAlign="center">
            Other
          </SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Content value="today">
        <YStack space="$4">
          <H5>Today's Tasks</H5>
          <TodoList />
        </YStack>
      </Tabs.Content>

      <Tabs.Content value="tomorrow">
        <YStack space="$4">
          <H5>Tomorrow's Tasks</H5>
          <TodoList />
        </YStack>
      </Tabs.Content>

      <Tabs.Content value="other">
        <YStack space="$4">
          <H5>Other Tasks</H5>
          <TodoList />
        </YStack>
      </Tabs.Content>
    </Tabs>
  );
};
