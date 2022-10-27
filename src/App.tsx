import './App.css';
import './assets/fonts/style.css';
import { Layout } from './components/Layout';
import { AppRoutes } from './Routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <AppRoutes/>
      </Layout>
    </div>
  );
}

export default App;
