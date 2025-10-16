export class Weather {
  constructor(data) {
    this.location = data.resolvedAddress;
    this.temperature = Math.round(data.currentConditions.temp);
    this.conditions = data.currentConditions.conditions;
    this.icon = data.currentConditions.icon;
    this.temperatureC = Math.round((this.temperature - 32) / 1.8);
    const daysInWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    this.forecast = data.days.slice(0, 7).map((day, index) => {
      let dayNameOfWeek;
      if (index === 0) {
        dayNameOfWeek = "Today";
      } else {
        let date = new Date(day.datetime);
        let dayIndex = date.getDay();
        dayNameOfWeek = daysInWeek[dayIndex];
      }
      return {
        dayName: dayNameOfWeek,
        maxTemp: Math.round(day.tempmax),
        maxTempC: Math.round((day.tempmax - 32) / 1.8),
        minTemp: Math.round(day.tempmin),
        minTempC: Math.round((day.tempmin - 32) / 1.8),
        precipChance: Math.round(day.precipprob),
        icon: day.icon,
      };
    });
  }
}
