import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import Routes from './routes';
import ReactDOM from 'react-dom'



function App() {
  return (
    <div className="App">
<Header />
<Routes />


<Footer />
    </div>
  );
}

export default App;
