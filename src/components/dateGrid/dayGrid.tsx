import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { useNavigate, useParams } from "react-router";

export default function DayGrid() {
    const navigate = useNavigate()
  const handleDateClick = (info: any) => {
    const date = info.dateStr; // get the clicked date in string format
    // use the date to construct the link to navigate to
    navigate(`/details/${date}`) ;
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
    />
  );
}
