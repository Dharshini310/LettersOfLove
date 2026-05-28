import './App.css'
import Welcome from './components/Welcome'
import OpenWithSmile from './components/OpenWithSmile'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import DadsWish from './components/Dad\'sWish'
import DadsNote from './components/Dad\'sNote'
import MomsWish from './components/Mom\'sWish'
import MomsNote from './components/Mom\'sNote'
import SisNote from './components/SisNote'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/open-with-smile"
          element={<OpenWithSmile />}
        />
        <Route path='/dads-wish' element={<DadsWish/>}/>
        <Route path='/dads-note' element={<DadsNote/>}/>
        <Route path='/moms-wish' element={<MomsWish/>}/>
        <Route path='/moms-note' element={<MomsNote/>}/>
        <Route path='/sis-note' element={<SisNote/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App