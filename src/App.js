import { registerRootComponent } from 'expo';
import MainLayout from './layouts/MainLayout';
import { Home } from './screens/index';

export default function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

registerRootComponent(App);