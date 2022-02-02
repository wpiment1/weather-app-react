import React from "react";

export default function FormattedDate(s) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let period = `am`;
  if (hours > 12) {
    hours = hours - 12;
    period = `pm`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  } else {
    hours = `${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes} {period}
    </div>
  );
}
