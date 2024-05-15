"use client";
import MainLayout from "@/components/layouts/MainLayout";
import { Card } from "antd";
import React from "react";

const Attendance: React.FC = () => {
  const [geoLocation, setGeoLocation] = React.useState({
    latitude: "",
    longitude: "",
  });
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoLocation({
          latitude: String(position.coords.latitude),
          longitude: String(position.coords.longitude),
        });
      });
    }
  }, []);

  return (
    <MainLayout>
      <Card>
        <p>{geoLocation?.latitude}</p>
        <p>{geoLocation?.longitude}</p>
      </Card>
    </MainLayout>
  );
};

export default Attendance;
