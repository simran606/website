import './App.css';
import Footer from './Components/footer';
import NavMenu from './Components/navbar';
import ShopProfile from './Components/shopProfile';
import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <ShopProfile />
      <Footer />
    </div>
  );
}

export default withRouter(App);
