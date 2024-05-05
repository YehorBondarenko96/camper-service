import { Page } from "components/Page/Page";
import { useSelector } from "react-redux";
import { selectFavorItems } from "../../redux/selectors";
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
    <Page
      allCampers={campersFavorite}
      page={page}
      showLoadMoreBut={showLoadMoreButFavorite}
      scrollValue={scrollValueFavorite}
      idContainer='favorite-div'
      showFavorite={true}
      handleClick={handleClick}
    />
  )
};

export default FavoritePage;