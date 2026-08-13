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
import ClosedOnes1 from './components/ClosedOnes-1'
import ClosedOnes2 from './components/ClosedOnes-2'
import ClosedOnes3 from './components/ClosedOnes-3'
import ClosedOnes4 from './components/ClosedOnes-4'
import ClosedOnes5 from './components/ClosesOnes-5'
import FinalBirthdayVideo from './components/FinalBirthdayVideo'

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
        <Route path='/closed-one-1' element={<ClosedOnes1/>}/>
        <Route path='/sis-note' element={<SisNote/>}/>
        <Route path='/closed-ones-2' element={<ClosedOnes2/>}/>
        <Route path='/closed-ones-3' element={<ClosedOnes3/>}/>
        <Route path='closed-ones-4' element={<ClosedOnes4/>}/>
        <Route path='/closed-ones-5' element={<ClosedOnes5/>}/>
        <Route path='/final-birthday-video' element={<FinalBirthdayVideo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App