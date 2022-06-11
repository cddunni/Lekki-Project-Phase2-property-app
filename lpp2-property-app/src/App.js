import './App.css';
import { Router,
  Routes,
  Route, } from 'react-router-dom';
import { routes } from "./router/routes";


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
