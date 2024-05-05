import { AllDiv, Ul, ButtonLoadMore } from "./UlCampers.syled";
import { LiCampers } from "components/LiCampers/LiCampers";
import { useRef, useEffect } from "react";

export const UlCampers = ({ campers, showLoadMoreBut, scrollValue, page, idContainer, handleClick }) => {

  const catalogDivRef = useRef(null);

  useEffect(() => {
    if (catalogDivRef.current) {
      const catalogDiv = catalogDivRef.current;
      
      setTimeout(() => {
        catalogDiv.scrollTop = page > 1 ? scrollValue + 300 : scrollValue;
      }, 0);
    }
  }, [scrollValue, page]);

  return (
    <AllDiv ref={catalogDivRef}  id={idContainer}>
      <Ul>
      {campers.map((camper, index) => <LiCampers key={index} camper={camper}/>)}
      </Ul>
      {showLoadMoreBut && 
      <ButtonLoadMore
        type="button"
        onClick={handleClick}
      >
        Load more
        </ButtonLoadMore>
      }
    </AllDiv>
  )
};