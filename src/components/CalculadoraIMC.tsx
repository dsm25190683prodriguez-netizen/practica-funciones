export const CalculadoraIMC = () => {
  // Calcula el IMC según peso (kg) y altura (m)
  const calcularIMC = (peso: number, altura: number): number => peso / (altura * altura);

  // Clasifica la categoría según el valor del IMC
  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">3. Calculadora de IMC</h3>
      <p>Peso: {peso} kg | Altura: {altura} m</p>
      <p>IMC: {imc.toFixed(2)}</p>
      <p>Clasificación: <strong className="text-blue-600">{clasificarIMC(imc)}</strong></p>
    </div>
  );
};