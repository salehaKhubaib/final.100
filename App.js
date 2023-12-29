// App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="D:\sp22-bse-100\my-redux-app\src\Redux\components\homepage.jsx" exact component={HomePage} />
        <Route path="/detail/:itemId" component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
