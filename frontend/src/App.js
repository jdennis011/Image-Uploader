import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import UploadPage from './Components/Pages/UploadPage'
import UploadedImage from './Components/Pages/UploadedImagePage';
import ImgServe from './Components/Pages/ImgServe'
import FZF from './Components/Pages/404Page.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UploadPage} />
        <Route path="/upload/:image_url" component={UploadedImage} />
        <Route path="/img/:image_url" component={ImgServe} />
        <Route component={FZF} />
      </Switch>
    </Router>
  );
}

export default App;
