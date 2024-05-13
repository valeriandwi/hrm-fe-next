"use client";
import MainLayout from "@/components/layouts/MainLayout";
import CalendarView from "@/features/calendar/CalendarView";
import React from "react";

const Calendar = () => {
  return (
    <MainLayout>
      <CalendarView />
    </MainLayout>
  );
};

export default Calendar;
