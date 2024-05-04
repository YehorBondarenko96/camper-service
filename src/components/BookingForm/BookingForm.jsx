import {
  AllDiv,
  DivText,
  Title,
  Text,
  DivInputs,
  DivInput,
  Input,
  ButtonSend,
  ButtonCalendar,
  SvgCalendar
} from "./BookingForm.styled";
import icon from "../../Vector.svg";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BookingForm = () => { 
  const [name, setName] = useState('');

  const setUserName = (e) => { 
    let inpValue = e.target.value;
    let pattern = /^[a-zA-Zа-яА-Я\s']+$/;
    if (!pattern.test(inpValue)) {
    toast.error('Not valid symbol for a name')
    inpValue = inpValue.slice(0, -1); 
  }
    setName(inpValue);
  };

  return (
    <AllDiv>
      <DivText>
        <Title>Book your campervan now</Title>
        <Text>Stay connected! We are always ready to help you.</Text>
      </DivText>
      <DivInputs>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={setUserName}
        />
        <Input
          placeholder="Email"
          type="email"
        />
        <DivInput>
          <Input
            placeholder="Booking date"
          />
          <ButtonCalendar>
            <SvgCalendar>
              <use href={`${icon}#calendar`}></use>
            </SvgCalendar>
          </ButtonCalendar>
        </DivInput>
        <Input
          type="text"
          style={{ height: '114px' }}
          placeholder="Comment"
        />
      </DivInputs>
      <ButtonSend
        type="button"
      >
        Send
      </ButtonSend>
      <ToastContainer />
    </AllDiv>
  )
};