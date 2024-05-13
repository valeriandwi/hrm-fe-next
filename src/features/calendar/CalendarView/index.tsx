import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // needed for dayClick
import useDrawer from "@/hooks/useDrawer";
import AppDrawer from "@/components/shared/AppDrawer";
import { EventClickArg } from "@fullcalendar/core/index.js";
import EventInformation from "../EventInformation";

const CalendarView = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  const handleDateClick = (arg: DateClickArg) => {
    console.log(arg.date);
    toggleDrawer();
  };

  const handleEventClick = (arg: EventClickArg) => {
    const id = arg.event._def.publicId;
    toggleDrawer();
  };

  return (
    <>
      <FullCalendar
        height={"85vh"}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2024-05-01", id: "1" },
          { title: "event 2", date: "2024-05-02" },
        ]}
        viewClassNames={"bg-white"}
        eventClassNames={"bg-white border-1 pl-2 border-l-4"}
        eventTextColor="black"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="large"
        onClose={toggleDrawer}
        bodyStyle={{ padding: "0px" }}
      >
        <EventInformation />
      </AppDrawer>
    </>
  );
};

export default CalendarView;
