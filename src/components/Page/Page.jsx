import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { AllDiv, DivLocationFilters } from "./Page.styled";
import { Header } from "components/Header/Header";
import { Location } from "components/Location/Location";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectValueAC,
  selectValueTransm,
  selectValueKitch,
  selectValueTV,
  selectValueShower,
  selectValueLocation,
  selectValueVan,
  selectValueFullIntedr,
  selectValueAlcove
} from "../../redux/selectors";
import {
  setValueAC,
  setValueTransm,
  setValueKitch,
  setValueTV,
  setValueShower,
  setValueVan,
  setValueFullIntedr,
  setValueAlcove
} from "../../redux/campersSlice";

export const Page = ({allCampers, page, showLoadMoreBut, scrollValue, idContainer, showFavorite, handleClick}) => { 
  const dispatch = useDispatch();
  const valueAC = useSelector(selectValueAC);
  const valueTransm = useSelector(selectValueTransm);
  const valueKitch = useSelector(selectValueKitch);
  const valueTV = useSelector(selectValueTV);
  const valueShower = useSelector(selectValueShower);
  const valueVan = useSelector(selectValueVan);
  const valueFullIntedr = useSelector(selectValueFullIntedr);
  const valueAlcove = useSelector(selectValueAlcove);

  const valueLocation = useSelector(selectValueLocation);

  const [renderCampers, setRenderCampers] = useState([]);

  const onClickAC = () => { 
    if (valueAC) {
      dispatch(setValueAC(false))
    } else {
      dispatch(setValueAC(true))
    }
  };

  const onClickTransm = () => { 
    if (valueTransm) {
      dispatch(setValueTransm(false))
    } else {
      dispatch(setValueTransm(true))
    }
  };

  const onClickKitch = () => { 
    if (valueKitch) {
      dispatch(setValueKitch(false))
    } else {
      dispatch(setValueKitch(true))
    }
  };

  const onClickTV = () => { 
    if (valueTV) {
      dispatch(setValueTV(false))
    } else {
      dispatch(setValueTV(true))
    }
  };

  const onClickShower = () => { 
    if (valueShower) {
      dispatch(setValueShower(false))
    } else {
      dispatch(setValueShower(true))
    }
  };

  const onClickVan = () => { 
    if (valueVan) {
      dispatch(setValueVan(false))
    } else {
      dispatch(setValueVan(true));
      dispatch(setValueFullIntedr(false));
      dispatch(setValueAlcove(false));
    }
  };

  const onClickFullIntedr = () => { 
    if (valueFullIntedr) {
      dispatch(setValueFullIntedr(false))
    } else {
      dispatch(setValueFullIntedr(true));
      dispatch(setValueVan(false));
      dispatch(setValueAlcove(false));
    }
  };

  const onClickAlcove = () => { 
    if (valueAlcove) {
      dispatch(setValueAlcove(false))
    } else {
      dispatch(setValueAlcove(true));
      dispatch(setValueFullIntedr(false));
      dispatch(setValueVan(false));
    }
  };

  useEffect(() => {
    let intermArr = [];
    if(valueLocation.length > 0) {
            intermArr = allCampers.filter((camper) => camper.location.toLowerCase().includes(valueLocation.toLowerCase()));
        } else{
            intermArr = allCampers;
    };
    
    if (valueAC) {
      intermArr = intermArr.filter((camper) => camper.details.airConditioner > 0);
    };

    if (valueTransm) {
      intermArr = intermArr.filter((camper) => camper.transmission === "automatic");
    };

    if (valueKitch) {
      intermArr = intermArr.filter((camper) => camper.details.kitchen > 0);
    };

    if (valueTV) {
      intermArr = intermArr.filter((camper) => camper.details.TV > 0);
    };

    if (valueShower) {
      intermArr = intermArr.filter((camper) => camper.details.shower > 0);
    };

    if (valueVan) {
      intermArr = intermArr.filter((camper) => camper.form === "panelTruck");
    };

    if (valueFullIntedr) {
      intermArr = intermArr.filter((camper) => camper.form === "fullyIntegrated");
    };

    if (valueAlcove) {
      intermArr = intermArr.filter((camper) => camper.form === "alcove");
    };

    setRenderCampers(intermArr)
  }, [allCampers, valueLocation, valueAC, valueTransm, valueKitch, valueTV, valueShower, valueVan, valueFullIntedr, valueAlcove]);

  return (
    <>
      <Header showFavorite={showFavorite} />
      <AllDiv>
        <DivLocationFilters>
          <Location/>
          <Filters
            onClickAC={onClickAC}
            onClickTransm={onClickTransm}
            onClickKitch={onClickKitch}
            onClickTV={onClickTV}
            onClickShower={onClickShower}
            onClickVan={onClickVan}
            onClickFullIntedr={onClickFullIntedr}
            onClickAlcove={onClickAlcove}
          />
        </DivLocationFilters>
        <UlCampers
          campers={renderCampers}
          showLoadMoreBut={showLoadMoreBut}
          scrollValue={scrollValue}
          page={page}
          idContainer={idContainer}
          handleClick={handleClick}
        />
    </AllDiv>
    </>
  )
};