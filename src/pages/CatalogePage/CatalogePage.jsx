import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import { AllDiv } from "./CatalogePage.styled";
import { Header } from "components/Header/Header";

const CatalogePage = () => { 
  const allCampers = useSelector(selectCampers);

  return (
    <>
      <Header/>
      <AllDiv>
      <Filters />
      <UlCampers campers={allCampers} />
    </AllDiv>
    </>
  )
};

export default CatalogePage;