import {Routes, BrowserRouter} from 'react-router-dom';
import {AppRouter} from '../providers/app-router';
import {Offers} from '../../types/offers';

type AppScreenProps = {
  offers: Offers;
}

function App({offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter offers={offers}/>
    </BrowserRouter>

  )
}

export default App;
