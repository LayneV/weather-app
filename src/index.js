import "./styles.css";
import { getData } from "./api.js";

async function main() {
  const data = await getData();
  console.log(`Current temp: ${data.currentConditions.temp}°F`);
}

main();
