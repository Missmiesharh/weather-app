import { daysOfWeek, daysOfWeekShortened, monthsOfYear, monthsOfYearShortened } from "./dayAndMonth";

export const formatDate = (data) => {
    data.forEach((item) => {
        const dateToFormat = new Date(item.date);
        const dayOfMonth = dateToFormat.getDate();
        const monthIndex = dateToFormat.getMonth();
        const dayOfWeekIndex = dateToFormat.getDay();
        item.formattedDate = `${dayOfMonth} ${monthsOfYearShortened[monthIndex]} ${daysOfWeekShortened[dayOfWeekIndex]}`;
        return item
    })
    return data;
}

export const formatLocalTime = (data, type) => {
    const dateToFormat = new Date(data);
    const dayOfMonth = dateToFormat.getDate();
    const monthIndex = dateToFormat.getMonth()
    const dayOfWeekIndex = dateToFormat.getDay()
    const hours = dateToFormat.getHours();
    const minutes = dateToFormat.getMinutes().toString().padStart(2, "0");
    const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`

    if (type === "day") {
        return daysOfWeek[dayOfWeekIndex];
    }
    if (type === "hour") {
        return `${hours}:${minutes}`;
    }
    return formattedDate;
}

export const formatTime = (data) => {
    const dataSplit = data.split(' ')
    const result = dataSplit[1]
    return result;
}

export const to24HourTime = (data) => {
    if (data.includes("PM")) {
        const timeSplit = data.split(" ");
        const hourSecondSplit = timeSplit[0].split(":");
        const hour = hourSecondSplit[0];
        if (hour !== "12") {
            let convertedTime = parseInt(hour) + 12;
            let formatedTime = `${convertedTime}:${hourSecondSplit[1]}`;
            return formatedTime;
        } else {
            let formatedTime = timeSplit[0];
            return formatedTime;
        }
    } else if (data.includes("AM")){
        const timeSplit = data.split(" ");
        const hourSecondSplit = timeSplit[0].split(":");
        const hour = hourSecondSplit[0];
        if (hour === "12") {
            let formatedTime = `00:${hourSecondSplit[1]}`;
            return formatedTime;
        } else {
            let formatedTime = timeSplit[0];
            return formatedTime;
        }
    } 
}

export const formatNextHours = (current, forecast) => {
    const localTimeEpoch = current.location.localtime_epoch;
    let count = 0;
    let nextHours = [];
    forecast.hour.forEach((item, index) => {
        if (count === 5) {
            return;
        }
        if (item.time_epoch > localTimeEpoch) {
            nextHours.push(item)
            count += 1
        }
    })
    console.log(nextHours);
    return nextHours;
}