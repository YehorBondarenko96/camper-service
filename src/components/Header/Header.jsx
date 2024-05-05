import { AllDiv, DivLinks, AbdLink } from "./Header.styled";
import { useSelector } from "react-redux";
import { selectFavorItems } from "../../redux/selectors";

export const Header = ({showFavorite = false}) => { 
  const favorItems = useSelector(selectFavorItems);

  return (
    <AllDiv>
      <DivLinks>
        <AbdLink to='/'>
          Home
        </AbdLink>
        {showFavorite ? (
            <AbdLink to='/catalog'>
          Catalog
        </AbdLink>
        ) : (favorItems.length > 0 &&
          <AbdLink to='/favorites'>
          Favorites
        </AbdLink>
          )}
      </DivLinks>
    </AllDiv>
  )
};