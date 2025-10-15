export class Weather {
  constructor(data) {
    this.location = data.resolvedAddress;
    this.temperature = Math.round(data.currentConditions.temp);
    this.conditions = data.currentConditions.conditions;
    this.icon = data.currentConditions.icon;
    this.temperatureC = Math.round((this.temperature - 32) / 1.8);
  }
}
