import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {AppRouter} from '../providers/app-router';
import {connect, ConnectedProps} from 'react-redux';
import {Spinner} from '../spinner/spinner';
import {TRootState} from '../../store/reducer';
import browserHistory from '../../browser-history';


const mapStateToProps = ({offers}: TRootState) => {
  const {isDataLoaded} = offers;
  return {
    isDataLoaded,
  }
};

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

function App({isDataLoaded}: PropsFromRedux): JSX.Element {

  if (!isDataLoaded) {
    return(
      <Spinner/>
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <AppRouter />
    </HistoryRouter>

  )
}

export {App};
export default connector(App);
