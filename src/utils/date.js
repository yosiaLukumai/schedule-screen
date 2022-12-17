import { date } from "quasar";

export const createTime = (time) => {
  return date.formatDate(time, "HH:mm");
};

export const weekDays = [
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Julai",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const mapWeekDay = (day) => {
  for (let x = 0; x <= weekDays.length; x++) {
    if (x + 1 == day) {
      return weekDays[x];
    }
  }
};

export const mapMonths = (month) => {
  for (let x = 0; x <= months.length; x++) {
    if (x + 1 == month) {
      return weekDays[x];
    }
  }
};

export const timestamp = () => Date.now();
export const currentDate = () =>
  date.formatDate(timestamp(), "YYYY-MM-DD HH:mm");

export const filterLater = (data) => {
  const curret = currentDate();
  const events = [];
  for (let x = 0; x < data?.length; x++) {
    // formatting the date
    let ass = data[x].startTime;
    ass = date.formatDate(ass, "YYYY-MM-DD HH:mm");
    // comparing
    const min = date.getMinDate(ass, curret);

    if (date.formatDate(min, "YYYY-MM-DD HH:mm") == curret) {
      events.push({
        subjectName: data[x].subjectName,
        startTime: createTime(data[x].startTime),
        endTime: createTime(data[x].endTime),
      });
    }
  }
  return events;
};

export const checkInBetween = (data) => {
  const curret = currentDate();
  for (let c = 0; c < data?.length; c++) {
    // getting the min and max then comparing them
    let min = date.getMinDate(
      date.formatDate(data[c].startTime, "YYYY-MM-DD HH:mm"),
      curret
    );
    let max = date.getMaxDate(
      date.formatDate(data[c].endTime, "YYYY-MM-DD HH:mm"),
      curret
    );
    if (
      date.formatDate(min, "YYYY-MM-DD HH:mm") ==
        date.formatDate(data[c].startTime, "YYYY-MM-DD HH:mm") &&
      date.formatDate(max, "YYYY-MM-DD HH:mm") ==
        date.formatDate(data[c].endTime, "YYYY-MM-DD HH:mm")
    ) {
      return data[c];
    }
    // console.log(date.formatDate(min, "YYYY-MM-DD HH:mm"), date.formatDate(max, "YYYY-MM-DD HH:mm"));
    //  if (date.isBetweenDates(currentDate, date.formatDate(data[c].startTime, "YYYY-MM-DD HH:mm"), date.formatDate(data[c].endTime, "YYYY-MM-DD HH:mm"), { inclusiveFrom: false, inclusiveTo: true })) {
    //     // Do something with dateTarget
    //     return data[c]
    //   }
  }

  return null;
};
