import {
  DivButtons,
  Button,
  ButtonAfter,
  DivMoreInfoBooking
} from "./MoreInfoBooking.styled";
import { Features } from "components/Features/Features";

export const MoreInfoBooking = ({camper}) => {
  return (
    <>
      <DivButtons>
      <Button>
        <ButtonAfter />
        Features
      </Button>
      <Button>
        <ButtonAfter />
        Reviews
      </Button>
      </DivButtons>
      <DivMoreInfoBooking>
        <Features camper={camper} />
      </DivMoreInfoBooking>
    </>
  )
};