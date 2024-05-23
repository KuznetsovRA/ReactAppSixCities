import {Routes, BrowserRouter} from 'react-router-dom';
import {AppRouter} from '../providers/app-router';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>

  )
}

export default App;
