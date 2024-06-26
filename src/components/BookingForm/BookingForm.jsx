import {
  AllForm,
  DivText,
  Title,
  Text,
  DivInputs,
  DivInput,
  Input,
  Textarea,
  ButtonSend,
  ButtonCalendar,
  SvgCalendar,
  DivToast,
  CalendarContainer
} from "./BookingForm.styled";
import icon from "../../Vector.svg";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { postBooking } from "../../redux/opertions";
import Calendar from "react-calendar";
import { registerLocale } from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';

registerLocale('en-US', enUS);

export const BookingForm = ({camper}) => { 
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const [valueCalendar, setValueCalendar] = useState(new Date());

  const [showCalendar, setShowCalendar] = useState(false);

  const setUserName = (e) => { 
    let inpValue = e.target.value;
    const pattern = /^[a-zA-Zа-яА-Яіё\s']+$/;
    if (!pattern.test(inpValue)) {
    toast.error('Not valid symbol for a name')
    inpValue = inpValue.slice(0, -1); 
  }
    setName(inpValue);
  };

  const setUserEmail = (e) => { 
    const inpValue = e.target.value;
    setEmail(inpValue);
  };

  const setSelectedDate = (e) => { 
    let inpValue = e.target.value;
    const pattern = /^[0-9\s.]+$/;
    if (inpValue !== '') {
      if (!pattern.test(inpValue)) {
    toast.error('Not valid symbol for a date')
    inpValue = inpValue.slice(0, -1); 
    };
    const arrDate = inpValue.split('.');
      if (arrDate[0].length > 2 || arrDate[0] > 31) {
      toast.error('The date should be in the format DD.MM.YYYY')
      return
      };
      if (arrDate[1] && (arrDate[1].length > 2 || arrDate[1] > 12 || arrDate[0].length < 2)) {
        toast.error('The date should be in the format DD.MM.YYYY')
      return
      };
      if (arrDate[2] && (arrDate[2].length > 4 || arrDate[1].length < 2)) {
        toast.error('The date should be in the format DD.MM.YYYY')
      return
      };

      if (arrDate[2]) {
        const actualYear = new Date().getFullYear();
      const arrActYear = String(actualYear).split('');

        const arrSelectedYear = arrDate[2].split('');
        if ((arrSelectedYear[0] && arrActYear[0] > arrSelectedYear[0]) ||
          (arrSelectedYear[1] && arrActYear[1] > arrSelectedYear[1]) ||
          (arrSelectedYear[2] && arrActYear[2] > arrSelectedYear[2]) ||
            (arrSelectedYear[3] && arrActYear[3] > arrSelectedYear[3])) {
          toast.error('Selected date cannot be in the past')
          return
        } else if ((arrSelectedYear[0] && arrActYear[0] < arrSelectedYear[0]) ||
          (arrSelectedYear[1] && arrActYear[1] < arrSelectedYear[1]) ||
          (arrSelectedYear[2] && arrActYear[2] < arrSelectedYear[2]) ||
            (arrSelectedYear[3] && 7 < arrSelectedYear[3])) {
          toast.error(`The selected date cannot be later than the year 2027`)
          return
        }
      };

      if (arrDate[0] && arrDate[1]) {
        if (
          arrDate[0] === '31' && (arrDate[1] === '02' || arrDate[1] === '04'
          || arrDate[1] === '06' || arrDate[1] === '09' || arrDate[1] === '11'
        )) {
          toast.error('Invalid date')
          return
        } else if (
          (arrDate[0] === '30' || arrDate[0] === '29') && arrDate[1] === '02') {
          toast.error('Invalid date')
          return
        }
      };
    };
    setDate(inpValue);
  };

  const setUserComment = (e) => {
    const inpValue = e.target.value;
    if (inpValue.length > 300) {
    toast.error('Comment cannot exceed 300 characters')
    } else {
      setComment(inpValue);
    }
  }

  const handleSubmit = (e) => {
    const arrDate = date.split('.');

    const today = new Date();
const day = parseInt(arrDate[0], 10); 
const month = parseInt(arrDate[1], 10) - 1; 
const year = parseInt(arrDate[2], 10);

const inputDate = new Date(year, month, day);


    if (name === '') {
      e.preventDefault();
      toast.error('Name is required')
    } else if (email === '') {
      e.preventDefault();
      toast.error('Email is required')
    } else if (!arrDate[2]) {
      e.preventDefault();
      toast.error('Date is required')
    } else if (inputDate <= today) {
      e.preventDefault();
      toast.error('The selected date must be in the future')
    } else {
      e.preventDefault();
      const userData = {
        name,
        email,
        date,
        comment,
        camper
      };
      dispatch(postBooking(userData));
    }
  };

  const handleClickCalendarBut = () => { 
    setShowCalendar(true);
    setTimeout(() => {
      window.addEventListener('click', handleClick);
    }, 0);
  };

  const handleClick = e => {
    if (!e.target.classList.contains('calendar-div') && !e.target.closest('.calendar-div')
      && !e.target.classList.contains('react-calendar__decade-view__years__year')
      && !e.target.classList.contains('react-calendar__year-view__months__month')
      && !e.target.closest('.react-calendar__year-view__months__month')) {
      setShowCalendar(false);
      window.removeEventListener('click', handleClick);
    }
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
};

  useEffect(() => {
    if (valueCalendar) {
      const goodFormateDate = formatDate(valueCalendar);
      setDate(goodFormateDate);
    };
  }, [valueCalendar]);

  return (
    <>
      <AllForm onSubmit={handleSubmit}>
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
          value={email}
          onChange={setUserEmail}
        />
        <DivInput>
          <Input
          type="text"
            placeholder="Booking date"
            value={date}
            onChange={setSelectedDate}
          />
            <ButtonCalendar
              type="button"
              onClick={handleClickCalendarBut}
            >
            <SvgCalendar>
              <use href={`${icon}#calendar`}></use>
            </SvgCalendar>
            </ButtonCalendar>
            {showCalendar &&
              <CalendarContainer className="calendar-div">
        <Calendar
          onChange={setValueCalendar}
          value={valueCalendar}
          locale="en-US"
        />
            </CalendarContainer>
            }
        </DivInput>
        <Textarea
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={setUserComment}
        />
      </DivInputs>
      <ButtonSend
        type="submit"
      >
        Send
      </ButtonSend>
    </AllForm>
      <DivToast><ToastContainer/></DivToast>
    </>
  )
};