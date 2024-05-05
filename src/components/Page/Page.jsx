import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { AllDiv, DivLocationFilters } from "./Page.styled";
import { Header } from "components/Header/Header";
import { Location } from "components/Location/Location";
import { useState, useEffect } from "react";

export const Page = ({allCampers, page, showLoadMoreBut, scrollValue, idContainer, showFavorite, handleClick}) => { 
  const [valueLocation, setValueLocation] = useState("");
  const [renderCampers, setRenderCampers] = useState([]);
  const [valueAC, setValueAC] = useState(false);
  const [valueTransm, setValueTransm] = useState(false);
  const [valueKitch, setValueKitch] = useState(false);
  const [valueTV, setValueTV] = useState(false);
  const [valueShower, setValueShower] = useState(false);

  const onClickAC = () => { 
    if (valueAC) {
      setValueAC(false)
    } else {
      setValueAC(true)
    }
  };

  const onClickTransm = () => { 
    if (valueTransm) {
      setValueTransm(false)
    } else {
      setValueTransm(true)
    }
  };

  const onClickKitch = () => { 
    if (valueKitch) {
      setValueKitch(false)
    } else {
      setValueKitch(true)
    }
  };

  const onClickTV = () => { 
    if (valueTV) {
      setValueTV(false)
    } else {
      setValueTV(true)
    }
  };

  const onClickShower = () => { 
    if (valueShower) {
      setValueShower(false)
    } else {
      setValueShower(true)
    }
  };

  const onChangeLocation = (e) => { 
    const inpValue = e.target.value;
    setValueLocation(inpValue);
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

    setRenderCampers(intermArr)
  }, [allCampers, valueLocation, valueAC, valueTransm, valueKitch, valueTV, valueShower]);

  return (
    <>
      <Header showFavorite={showFavorite} />
      <AllDiv>
        <DivLocationFilters>
          <Location
            value={valueLocation}
            onChange={onChangeLocation}
          />
          <Filters
            onClickAC={onClickAC}
            valueAC={valueAC}
            onClickTransm={onClickTransm}
            valueTransm={valueTransm}
            onClickKitch={onClickKitch}
            valueKitch={valueKitch}
            onClickTV={onClickTV}
            valueTV={valueTV}
            onClickShower={onClickShower}
            valueShower={valueShower}
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