import { Ul } from "./UlCampers.syled";
import { LiCampers } from "components/LiCampers/LiCampers";

export const UlCampers = ({campers}) => {
  return (
    <Ul>
      {campers.map((camper, index) => <LiCampers key={index} camper={camper}/>)}
    </Ul>
  )
};