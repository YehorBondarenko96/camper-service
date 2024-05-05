import {
  AllDiv,
  TitleFilters,
  DivTitleParams,
  TextTitleParams,
  Ul,
  Li,
  Button,
  Svg,
  TextParams,
  BigSvg
} from "./Filters.styled";
import icon from '../../Vector.svg';
import { useSelector } from "react-redux";
import {
  selectValueAC,
  selectValueTransm,
  selectValueKitch,
  selectValueTV,
  selectValueShower,
  selectValueVan,
  selectValueFullIntedr,
  selectValueAlcove
} from "../../redux/selectors";

export const Filters = ({ onClickAC, onClickTransm, onClickKitch,
  onClickTV, onClickShower, onClickVan, onClickFullIntedr, onClickAlcove }) => {
  const valueAC = useSelector(selectValueAC);
  const valueTransm = useSelector(selectValueTransm);
  const valueKitch = useSelector(selectValueKitch);
  const valueTV = useSelector(selectValueTV);
  const valueShower = useSelector(selectValueShower);
  const valueVan = useSelector(selectValueVan);
  const valueFullIntedr = useSelector(selectValueFullIntedr);
  const valueAlcove = useSelector(selectValueAlcove);
  return (
    <AllDiv>
      <TitleFilters>Filters</TitleFilters>
      <DivTitleParams>
        <TextTitleParams>Vehicle equipment</TextTitleParams>
      </DivTitleParams>
      <Ul>
        <Li>
          <Button
            type="button"
            onClick={onClickAC}
            style={{borderColor: valueAC && 'var(--primery-color-red)'}}
          >
            <Svg>
              <use href={`${icon}#airConditioner`}></use>
            </Svg>
            <TextParams>AC</TextParams>
          </Button>
        </Li>
        <Li>
          <Button
            type="button"
            onClick={onClickTransm}
            style={{borderColor: valueTransm && 'var(--primery-color-red)'}}
          >
            <Svg>
              <use href={`${icon}#transmission`}></use>
            </Svg>
            <TextParams>Automatic</TextParams>
          </Button>
        </Li>
        <Li>
          <Button
            type="button"
            onClick={onClickKitch}
            style={{borderColor: valueKitch && 'var(--primery-color-red)'}}
          >
            <Svg>
              <use href={`${icon}#kitchen`}></use>
            </Svg>
            <TextParams>Kitchen</TextParams>
          </Button>
        </Li>
        <Li>
          <Button
            type="button"
            onClick={onClickTV}
            style={{borderColor: valueTV && 'var(--primery-color-red)'}}
          >
            <Svg>
              <use href={`${icon}#TV`}></use>
            </Svg>
            <TextParams>TV</TextParams>
          </Button>
        </Li>
        <Li>
          <Button
            type="button"
            onClick={onClickShower}
            style={{borderColor: valueShower && 'var(--primery-color-red)'}}
          >
            <Svg>
              <use href={`${icon}#shower`}></use>
            </Svg>
            <TextParams>Shower/WC</TextParams>
          </Button>
        </Li>
      </Ul>
      <DivTitleParams>
        <TextTitleParams>Vehicle type</TextTitleParams>
      </DivTitleParams>
      <Ul>
        <Li>
          <Button
            type="button"
            onClick={onClickVan}
            style={{borderColor: valueVan && 'var(--primery-color-red)'}}
          >
            <BigSvg>
              <use href={`${icon}#van`}></use>
            </BigSvg>
            <TextParams>Van</TextParams>
          </Button>
        </Li>
        <Li>
          <Button
            type="button"
            onClick={onClickFullIntedr}
            style={{borderColor: valueFullIntedr && 'var(--primery-color-red)'}}
          >
            <BigSvg>
              <use href={`${icon}#full-integr`}></use>
            </BigSvg>
            <TextParams>Fully Integrated</TextParams>
          </Button>
        </Li>
        <Li>
          <Button
            type="button"
            onClick={onClickAlcove}
            style={{borderColor: valueAlcove && 'var(--primery-color-red)'}}
          >
            <BigSvg>
              <use href={`${icon}#alcove`}></use>
            </BigSvg>
            <TextParams>Alcove</TextParams>
          </Button>
        </Li>
      </Ul>
    </AllDiv>
  )
};