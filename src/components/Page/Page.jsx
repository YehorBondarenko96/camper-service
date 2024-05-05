import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { AllDiv, DivLocationFilters } from "./Page.styled";
import { Header } from "components/Header/Header";
import { Location } from "components/Location/Location";
import { useState, useEffect } from "react";

export const Page = ({allCampers, page, showLoadMoreBut, scrollValue, idContainer, showFavorite, handleClick}) => { 
  const [valueLocation, setValueLocation] = useState("");
  const [renderCampers, setRenderCampers] = useState([]);

  const onChangeLocation = (e) => { 
    const inpValue = e.target.value;
    setValueLocation(inpValue);
  };

  useEffect(() => {
    if(valueLocation.length > 0) {
            setRenderCampers(allCampers.filter((camper) => camper.location.toLowerCase().includes(valueLocation.toLowerCase())));
        } else{
            setRenderCampers(allCampers);
        };
  }, [allCampers, valueLocation]);

  return (
    <>
      <Header showFavorite={showFavorite} />
      <AllDiv>
        <DivLocationFilters>
          <Location
            value={valueLocation}
            onChange={onChangeLocation}
          />
          <Filters />
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