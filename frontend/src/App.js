import './App.css';
import logo from './Group2.svg';
import photo from './photo.svg';
import settings from './settings.svg';

function App() {
  return (
    <div className="test">
      <img className="col-sm-4 col-md-2" src={logo} alt="logo"/>
      <p className="col-sm-6 col-md-8 ">Lundi 26 Novembre</p>
      <img className="col-1" id="set" src={settings} alt="settings"/>
      <img className="col-1" id="photo" src={photo} alt="photo"/>
    </div>
  );
}

export default App;
