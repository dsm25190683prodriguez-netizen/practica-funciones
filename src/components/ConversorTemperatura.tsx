export const ConversorTemperatura = () => {
  // Convierte grados Celsius a Fahrenheit
  const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;
  // Convierte grados Fahrenheit a Celsius
  const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

  const temperatura = 25;

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">2. Conversor de Temperatura</h3>
      <p>{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
      <p>100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p>
    </div>
  );
};