const moment = require("moment");

exports.getSigno = function(date) {
  const momentDate = moment(date, "DD-MM-YYYY");
  const day = momentDate.format("DD");
  const month = momentDate.month() + 1;

  const monthName = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
  };

  switch (month) {
    case monthName.March:
      if (day >= 21 && day <= momentDate.daysInMonth()) return "Áries";
      else if (day >= 1 && day <= 20) return "Peixes";
      break;

    case monthName.April:
      if (day >= 1 && day <= 19) return "Áries";
      else if (day >= 20 && day <= momentDate.daysInMonth()) return "Touro";
      break;

    case monthName.May:
      if (day >= 1 && day <= 20) return "Touro";
      else if (day >= 21 && day <= momentDate.daysInMonth()) return "Gêmeos";
      break;

    case monthName.June:
      if (day >= 1 && day <= 21) return "Gêmeos";
      else if (day >= 22 && day <= momentDate.daysInMonth()) return "Câncer";
      break;

    case monthName.July:
      if (day >= 1 && day <= 22) return "Câncer";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Leão";
      break;

    case monthName.August:
      if (day >= 1 && day <= 22) return "Leão";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Virgem";
      break;

    case monthName.September:
      if (day >= 1 && day <= 22) return "Virgem";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Libra";
      break;

    case monthName.October:
      if (day >= 1 && day <= 22) return "Libra";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Escorpião";
      break;

    case monthName.November:
      if (day >= 1 && day <= 21) return "Escorpião";
      else if (day >= 22 && day <= momentDate.daysInMonth()) return "Sagitário";
      break;

    case monthName.December:
      if (day >= 1 && day <= 21) return "Sagitário";
      else if (day >= 22 && day <= momentDate.daysInMonth())
        return "Capricornio";
      break;

    case monthName.January:
      if (day >= 1 && day <= 19) return "Capricornio";
      else if (day >= 20 && day <= momentDate.daysInMonth()) return "Aquário";
      break;

    case monthName.February:
      if (day >= 1 && day <= 18) return "Aquário";
      else if (day >= 19 && day <= momentDate.daysInMonth()) return "Peixes";
      break;
  }
};
