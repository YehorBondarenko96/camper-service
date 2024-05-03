import {
  AllDiv,
  SecAllDiv,
  Title,
  SecTitle,
  DivBut,
  ButtonLink
} from "./HomePage.styled";
import { useSelector } from "react-redux";
import { selectBackgroundImage, selectFavorItems } from "../../redux/selectors";

const HomePage = () => { 
  const imgForBackground = useSelector(selectBackgroundImage) || 'https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0';
  const favorItems = useSelector(selectFavorItems);

  return (
    <AllDiv style={{ backgroundImage: `url(${imgForBackground})`}}>
      <SecAllDiv>
        <Title>Campers for active recreation</Title>
        <SecTitle>Better price-to-quality ratio in Europe</SecTitle>
        <DivBut>
          <ButtonLink to='/catalog'>
            Catalog
          </ButtonLink>
          {favorItems.length > 0 &&
            <ButtonLink to='/favorites'>
            Favorites
          </ButtonLink>}
        </DivBut>
      </SecAllDiv>
    </AllDiv>
  )
};

export default HomePage;