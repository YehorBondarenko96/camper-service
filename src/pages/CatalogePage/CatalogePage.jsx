import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import { AllDiv } from "./CatalogePage.styled";

const CatalogePage = () => { 
  const allCampers = useSelector(selectCampers);

  return (
    <AllDiv>
      <Filters />
      <UlCampers campers={allCampers} />
    </AllDiv>
  )
};

export default CatalogePage;