const moment = require("moment");

exports.getSigno = function(date) {
  const momentDate = moment(date, "DD-MM-YYYY");
  const day = momentDate.format("DD");
  const month = momentDate.month() + 1;

  switch (month) {
    case 3:
      if (day >= 21 && day <= momentDate.daysInMonth()) return "Áries";
      else if (day >= 1 && day <= 20) return "Peixes";
      break;

    case 4:
      if (day >= 1 && day <= 19) return "Áries";
      else if (day >= 20 && day <= momentDate.daysInMonth()) return "Touro";
      break;

    case 5:
      if (day >= 1 && day <= 20) return "Touro";
      else if (day >= 21 && day <= momentDate.daysInMonth()) return "Gêmeos";
      break;

    case 6:
      if (day >= 1 && day <= 21) return "Gêmeos";
      else if (day >= 22 && day <= momentDate.daysInMonth()) return "Câncer";
      break;

    case 7:
      if (day >= 1 && day <= 22) return "Câncer";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Leão";
      break;

    case 8:
      if (day >= 1 && day <= 22) return "Leão";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Virgem";
      break;

    case 9:
      if (day >= 1 && day <= 22) return "Virgem";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Libra";
      break;

    case 10:
      if (day >= 1 && day <= 22) return "Libra";
      else if (day >= 23 && day <= momentDate.daysInMonth()) return "Escorpião";
      break;

    case 11:
      if (day >= 1 && day <= 21) return "Escorpião";
      else if (day >= 22 && day <= momentDate.daysInMonth()) return "Sagitário";
      break;

    case 12:
      if (day >= 1 && day <= 21) return "Sagitário";
      else if (day >= 22 && day <= momentDate.daysInMonth()) return "Capricornio";
      break;
      
    case 1:
      if (day >= 1 && day <= 19) return "Capricornio";
      else if (day >= 20 && day <= momentDate.daysInMonth()) return "Aquário";
      break;
           
    case 2:
      if (day >= 1 && day <= 18) return "Aquário";
      else if (day >= 19 && day <= momentDate.daysInMonth()) return "Peixes";
      break;
  }
};
