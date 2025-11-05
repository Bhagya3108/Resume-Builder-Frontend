
import './App.css'

import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes ,Route} from 'react-router-dom';
import Landingpage from './pages/Landingpage'
import Resumegenerator from './pages/Resumegenerator'
import History from './pages/History'
import Form from './pages/Form'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  

  return (
    <>
      <Header/>
  
       <Routes>
            <Route path='' element={<Landingpage/>}/>
            <Route path='/resume-generator' element={<Resumegenerator/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/*' element={<Pagenotfound/>}/>
           
    
       </Routes>
  <Footer/>
    
    </>
  )
}

export default App
