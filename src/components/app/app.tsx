import Main from '../main/main';

type AppScreenProps = {
  countPlace: number;
}

function App({countPlace}: AppScreenProps): JSX.Element {
  return (
    <Main countPlace={countPlace}/>
  )
}

export default App;
