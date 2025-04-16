import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Menu from '~/components/Menu';

interface ToDo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const AllToDosScreen: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // Sostituisci l'URL con quello del tuo endpoint backend
        const response = await axios.get('http://localhost:8000/api/todos/');
        setTodos(response.data);
      } catch (error) {
        console.error('Errore nel recupero delle ToDo', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Caricamento...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <View className="flex-1 p-4">
        <Text className="mb-4 text-xl font-bold">Tutte le ToDo</Text>
        {todos.length === 0 ? (
          <Text>Nessuna ToDo presente.</Text>
        ) : (
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="mb-2 rounded border p-4">
                <Text className="text-lg font-bold">{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>{item.completed ? 'Completata' : 'Non completata'}</Text>
              </View>
            )}
          />
        )}
      </View>
      <Menu />
    </SafeAreaView>
  );
};
