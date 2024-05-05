import {
  AllDiv,
  TitleFilters,
  DivTitleParams,
  TextTitleParams,
  Ul,
  Li,
  Button,
  Svg,
  TextParams
} from "./Filters.styled";
import icon from '../../Vector.svg';

export const Filters = ({ onClickAC, valueAC, valueTransm, onClickTransm,
  valueKitch, onClickKitch, valueTV, onClickTV, valueShower, onClickShower }) => {
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
    </AllDiv>
  )
};