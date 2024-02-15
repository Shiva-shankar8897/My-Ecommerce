import './App.css';
import LandingPage from './Components/Pages/LandingPage';
import {Routes,Route} from 'react-router-dom'
import MobilePage from './Components/Pages/MobilePage';
import ComputerPage from './Components/Pages/ComputerPage';
import WatchesPage from './Components/Pages/WatchesPage';
import MenfashionPage from './Components/Pages/MenfashionPage';
import WomenfashionPage from './Components/Pages/WomenfashionPage';
import FurniturePage from './Components/Pages/FurniturePage';
import AirconditionerPage from './Components/Pages/AirconditionerPage';
import KitchenPage from './Components/Pages/KitchenPage';
import TelevisionPage from './Components/Pages/TelevisionPage';
import BooksPage from './Components/Pages/BooksPage';
import FridgePage from './Components/Pages/FridgePage';
import SpeakersPage from './Components/Pages/SpeakersPage';
import MobileRoute from './Components/DynamicRouting/MobileRoute';
import UserCart from './Components//MainPage/UserCart';
import ComputerRoute from './Components/DynamicRouting/ComputerRoute';
import WatchRoute from './Components/DynamicRouting/WatchRoute';
import MensRoute from './Components/DynamicRouting/MensRoute';
import WomensRoute from './Components/DynamicRouting/WomensRoute';
import FurnitureRoute from './Components/DynamicRouting/FurnitureRoute';
import AcRoute from './Components/DynamicRouting/AcRoute';
import KitchenRoute from './Components/DynamicRouting/KitchenRoute';
import TvRoute from './Components/DynamicRouting/TvRoute';
import BooksRoute from './Components/DynamicRouting/BooksRoute';
import FridgeRoute from './Components/DynamicRouting/FridgeRoute';
import SpeakersRoute from './Components/DynamicRouting/SpeakersRoute';

function App() {
  return (
   <div>
    <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/Mobiles' element={<MobilePage />} />
    <Route path='/Computers' element={<ComputerPage />} />
    <Route path='/Watches' element={<WatchesPage />} />
    <Route path='/MenFashion' element={<MenfashionPage />} />
    <Route path='/WomenFashion' element={<WomenfashionPage />} />
    <Route path='/Furniture' element={<FurniturePage />} />
    <Route path='/AC' element={<AirconditionerPage />} />
    <Route path='/Kitchen' element={<KitchenPage />} />
    <Route path='/TV' element={<TelevisionPage />} />
    <Route path='/Books' element={<BooksPage />} />
    <Route path='/Fridge' element={<FridgePage />} />
    <Route path='/Speakers' element={<SpeakersPage />} />

      {/* //Individual link based on link */}
      <Route path='/Mobiles/:id' element={<MobileRoute />} />
      <Route path='/Computers/:id' element={<ComputerRoute />} />
      <Route path='/Watches/:id' element={<WatchRoute />} />
      <Route path='/MensFashion/:id' element={<MensRoute />} />
      <Route path='/WomenFashion/:id' element={<WomensRoute />} />
      <Route path='/Furniture/:id' element={<FurnitureRoute />} />
      <Route path='/Ac/:id' element={<AcRoute />} />
      <Route path='/Kitchen/:id' element={<KitchenRoute />} />
      <Route path='/TV/:id' element={<TvRoute />} />
      <Route path='/Books/:id' element={<BooksRoute />} />
      <Route path='/Fridge/:id' element={<FridgeRoute />} />
      <Route path='/Speakers/:id' element={<SpeakersRoute />} />
    
    <Route path='/Cart' element={<UserCart />} />
    </Routes>
   </div>
    
  );
}

export default App;
