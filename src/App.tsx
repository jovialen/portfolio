import { Router } from './router';
import Layout from './components/Layout';
import './styles/global.css';

export default function App() {
  return <Router>{(props) => <Layout>{props.children}</Layout>}</Router>;
}
