import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route, } from 'react-router-dom';
import { routes } from "./router/routes"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route,i) => {
          return <Route exact={route.exact} key={i} path={route.link} element={<route.component/>} />
        })}
      </Routes>
    </Router>
  );
}

export default App;
