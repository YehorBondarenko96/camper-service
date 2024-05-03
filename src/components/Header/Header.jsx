import { AllDiv, DivLinks, AbdLink } from "./Header.styled";
import { useSelector } from "react-redux";
import { selectFavorItems } from "../../redux/selectors";

export const Header = () => { 
  const favorItems = useSelector(selectFavorItems);

  return (
    <AllDiv>
      <DivLinks>
        <AbdLink to='/'>
          Home
        </AbdLink>
        {favorItems.length > 0 &&
          <AbdLink to='/favorites'>
          Favorites
        </AbdLink>
        }
      </DivLinks>
    </AllDiv>
  )
};