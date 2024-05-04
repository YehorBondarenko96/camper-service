import {
  DivButtons,
  Button,
  ButtonAfter,
  DivMoreInfoBooking
} from "./MoreInfoBooking.styled";
import { Features } from "components/Features/Features";
import { Reviews } from "components/Reviews/Reviews";
import { useState } from "react";

export const MoreInfoBooking = ({ camper }) => {
  const [selectedF, setSelectedF] = useState(true);
  
  return (
    <>
      <DivButtons>
      <Button onClick={() => {setSelectedF(true)}}>
        {selectedF && <ButtonAfter />}
        Features
      </Button>
      <Button onClick={() => {setSelectedF(false)}}>
        {!selectedF && <ButtonAfter />}
        Reviews
      </Button>
      </DivButtons>
      <DivMoreInfoBooking>
        {selectedF && <Features camper={camper} />}
        {!selectedF && <Reviews camper={camper} />}

      </DivMoreInfoBooking>
    </>
  )
};