import { NativeBaseProvider, StatusBar } from 'native-base'
import { THEMES } from './src/styles/themes';
import Rotas from './src/Routers';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
