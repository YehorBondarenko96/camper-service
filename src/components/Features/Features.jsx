import {
  AllDiv, 
  UlCharacteristic,
  DivVehisleDetails,
  DivTitleDetails,
  TextTitleDetails,
  UlDetails,
  LiDetails,
  TextDetails
} from "./Features.styled";
import { LiCharacteristic } from "components/LiCharacteristic/LiCharacteristic";
import icon from "../../Vector.svg";

export const Features = ({ camper }) => {

  const refactStr = (str) => { 
    const arrWords = str.split(/(?=[A-Z])/);
    let newStr = "";
    arrWords.forEach((word, index) => {
      if (index === 0) {
        newStr += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
      } else {
        newStr += word.charAt(0).toLowerCase() + word.slice(1) + ' ';
      }
    });
    return newStr.trim()
  };

  const refactQuantitie = (str) => { 
    const arrQuant = str.split(/(?=[A-Z, a-z])/);
    let newQuant = "";
    arrQuant.forEach((q, index) => {
      if (index !== 0) {
        newQuant += q;
      } else {
        newQuant += q + ' ';
      }
    });
    return newQuant.trim()
  };

  
  return (
    <AllDiv>
      <UlCharacteristic>
          <LiCharacteristic
            svg={<use href={`${icon}#users`}></use>}
            text={`${camper.adults} adults`}
          />
          <LiCharacteristic
            svg={<use href={`${icon}#transmission`}></use>}
            text={`${camper.transmission}`}
        />
        {camper.details.airConditioner > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#airConditioner`}></use>}
            text={'AC'}
            />
          }
          <LiCharacteristic
            svg={<use href={`${icon}#engine`}></use>}
            text={`${camper.engine}`}
          />
          {camper.details.kitchen > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#kitchen`}></use>}
            text={'kitchen'}
            />
          }
          {camper.details.beds > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#bed`}></use>}
            text={`${camper.details.beds} ${camper.details.beds === 1 ? 'bed' : 'beds'}`}
          />
        }
        {camper.details.airConditioner > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#condition`}></use>}
            text={`${camper.details.airConditioner} ${camper.details.airConditioner === 1 ? 'air conditioner' : 'air conditioners'}`}
          />
        }
        {camper.details.CD > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#CD`}></use>}
            text={'CD'}
            />
        }
        {camper.details.TV > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#TV`}></use>}
            text={'TV'}
            />
        }
        {camper.details.radio > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#radio`}></use>}
            text={'radio'}
            />
        }
        {camper.details.hob > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#hob`}></use>}
            text={`${camper.details.hob} ${camper.details.hob === 1 ? 'hob' : 'hobs'}`}
          />
        }
        {camper.details.shower > 0 &&
            <LiCharacteristic
            svg={<use href={`${icon}#shower`}></use>}
            text={`${camper.details.shower} ${camper.details.shower === 1 ? 'shower' : 'hshower'}`}
          />
        }
      </UlCharacteristic>
      <DivVehisleDetails>
        <DivTitleDetails>
          <TextTitleDetails>Vehicle details</TextTitleDetails>
        </DivTitleDetails>
        <UlDetails>
          <LiDetails>
            <TextDetails>Form</TextDetails>
            <TextDetails>{refactStr(camper.form)}</TextDetails>
          </LiDetails>
          <LiDetails>
            <TextDetails>Length</TextDetails>
            <TextDetails>{refactQuantitie(camper.length)}</TextDetails>
          </LiDetails>
          <LiDetails>
            <TextDetails>Width</TextDetails>
            <TextDetails>{refactQuantitie(camper.width)}</TextDetails>
          </LiDetails>
          <LiDetails>
            <TextDetails>Height</TextDetails>
            <TextDetails>{refactQuantitie(camper.height)}</TextDetails>
          </LiDetails>
          <LiDetails>
            <TextDetails>Tank</TextDetails>
            <TextDetails>{refactQuantitie(camper.tank)}</TextDetails>
          </LiDetails>
          <LiDetails>
            <TextDetails>Consumption</TextDetails>
            <TextDetails>{camper.consumption}</TextDetails>
          </LiDetails>
        </UlDetails>
      </DivVehisleDetails>
    </AllDiv>
  )
};