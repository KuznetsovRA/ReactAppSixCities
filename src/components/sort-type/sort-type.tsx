import {SORT_TYPE_NAMES} from '../../const';
import {SortNameType} from '../../types/const';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch, MouseEvent, useState} from 'react';
import {Actions} from '../../types/action';
import {changeSortType} from '../../store/action';
import {TRootState} from '../../store/reducer';


const mapStateToProps = ({offers}: TRootState) => {
  const {currentSortType, currentOffers} = offers;
  return {
    currentSortType,
    currentOffers,
  }
};
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeSortType(evt: MouseEvent<HTMLLIElement>, sort: SortNameType) {
    evt.preventDefault();
    dispatch(changeSortType(sort));
  }
});



const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function SortType({onChangeSortType}:PropsFromRedux) {
  const [isOptionOpen, setIsOptionedOpen] = useState(false)

  function getSortTypeItemMarkup (SortTypes: SortNameType[]) {
    return (
      <>
        {
          SortTypes.map((SortType, i)=>(
            <li
              className="places__option places__option--active"
              key={i}
              tabIndex={0}
              onClick={(event)=>{
                onChangeSortType(event, SortType);
                setIsOptionedOpen(!isOptionOpen);
              }}
            >
              {SortType}
            </li>
          ))
        }
      </>

    )
  }

  return (
    <form className="places__sorting" action="" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={()=>{setIsOptionedOpen(!isOptionOpen)}}
      >
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
      <ul className={`places__options places__options--custom ${isOptionOpen? `places__options--opened`: `places__options`}`}>
        {getSortTypeItemMarkup(SORT_TYPE_NAMES)}
      </ul>
    </form>
  )
}

export {SortType};
export default connector(SortType);


