import { Router } from './router';
import Layout from './components/Layout';
import { usePreferencesSync } from './preferences';
import './styles/global.css';
import './styles/themes.css';

export default function App() {
  usePreferencesSync();
  return <Router>{(props) => <Layout>{props.children}</Layout>}</Router>;
}
