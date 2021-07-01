const timeInput = "12:40:22AM";

const timeConversion = (s) => {
  const splitTime = s.split(":");

  const hour = splitTime[0];
  const minute = splitTime[1];
  const second = splitTime[2].slice(0, 2);
  let modifiedHour = hour;

  const getMonth = () => {
    const isAM = s.includes("AM");
    if (hour == 12) {
      modifiedHour = isAM ? "00" : "12";
    } else {
      modifiedHour = isAM ? hour : 12 + parseInt(hour);
    }
  };
  getMonth();

  return `${modifiedHour}:${minute}:${second}`;
};

console.log(timeConversion(timeInput));
