import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { useSelector } from "react-redux";
import {
  selectFavorItems,
} from "../../redux/selectors";
import { AllDiv } from "./FavoritePage.styled";
import { Header } from "components/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FavoritePage = () => { 
  const navigate = useNavigate();

  const allCampersFavorite = useSelector(selectFavorItems);

  const [page, setPage] = useState(1);
  const [scrollValueFavorite, setScrollValueFavorite] = useState(0);
  const [campersFavorite, setCampersFavorite] = useState([]);
  const [showLoadMoreButFavorite, setShowLoadMoreButFavorite] = useState(true);

  useEffect(() => {
    if (allCampersFavorite.length < 1) { 
      navigate('/');
    };

    const pageSize = 4; 
    const startIdx = (page - 1) * pageSize;
    const endIdx = startIdx + pageSize;
  const nextCampersFavorite = allCampersFavorite.slice(startIdx, endIdx);

    if (nextCampersFavorite.length < 4) {
      setShowLoadMoreButFavorite(false);
  };
  nextCampersFavorite.forEach(item => { 
      if (!campersFavorite.find(i => i.id === item.id)) {
          setCampersFavorite([...campersFavorite, item])
      }
  });
  }, [allCampersFavorite, campersFavorite, page, navigate]);
  

  const handleClick = () => {
    setPage(page + 1);
    const catalogDiv = document.getElementById('favorite-div');
    if (catalogDiv) {
      setScrollValueFavorite(catalogDiv.scrollTop);
    }
  };

  return (
    <>
      <Header showFavorite= 'true' />
      <AllDiv>
      <Filters />
        <UlCampers
          campers={campersFavorite}
          showLoadMoreBut={showLoadMoreButFavorite}
          scrollValue={scrollValueFavorite}
          page={page}
          idContainer='favorite-div'
          handleClick={handleClick}
        />
    </AllDiv>
    </>
  )
};

export default FavoritePage;