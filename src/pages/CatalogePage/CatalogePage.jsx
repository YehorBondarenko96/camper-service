import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCampers,
  selectPage,
  selectShowLoadMoreButCatalog,
  selectScrollValueCatalog
} from "../../redux/selectors";
import { AllDiv, DivLocationFilters } from "./CatalogePage.styled";
import { Header } from "components/Header/Header";
import { fetchCampers } from "../../redux/opertions";
import { setPage, setScrollValueCatalog } from "../../redux/campersSlice";
import { Location } from "components/Location/Location";
import { useState, useEffect } from "react";

const CatalogePage = () => { 
  const dispatch = useDispatch();
  const allCampers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const showLoadMoreButCatalog = useSelector(selectShowLoadMoreButCatalog);
  const scrollValueCatalog = useSelector(selectScrollValueCatalog);

  const [valueLocation, setValueLocation] = useState("");
  const [renderCampers, setRenderCampers] = useState([]);

  const handleClick = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchCampers(page + 1));
    const catalogDiv = document.getElementById('catalog-div');
    if (catalogDiv) {
      dispatch(setScrollValueCatalog((catalogDiv.scrollTop)));
    }
  };

  const onChangeLocation = (e) => { 
    const inpValue = e.target.value;
    setValueLocation(inpValue);
  };

  useEffect(() => {
    if (valueLocation === "") {
      setRenderCampers(allCampers);
    } else {
      
    }

    if(valueLocation.length > 0) {
            setRenderCampers(allCampers.filter((camper) => camper.location.toLowerCase().includes(valueLocation.toLowerCase())));
        } else{
            setRenderCampers(allCampers);
        };
  }, [allCampers, valueLocation]);

  return (
    <>
      <Header/>
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
          showLoadMoreBut={showLoadMoreButCatalog}
          scrollValue={scrollValueCatalog}
          page={page}
          idContainer='catalog-div'
          handleClick={handleClick}
        />
    </AllDiv>
    </>
  )
};

export default CatalogePage;