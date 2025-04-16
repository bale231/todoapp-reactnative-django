import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import Menu from '../components/Menu';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      {/* Contenuto principale che riempie lo spazio */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Benvenuto nella ToDoApp!</Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Nessuna Lista di ToDo creata.</Text>

        {/* Pulsante per la creazione di ToDoList */}
        <TouchableOpacity
          onPress={() => console.log('Vai a Crea ToDoList')}
          style={{
            backgroundColor: 'blue',
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>+ Crea la tua lista di ToDo</Text>
        </TouchableOpacity>
      </View>

      {/* Menu fisso in fondo */}
      <Menu />
    </SafeAreaView>
  );
};
