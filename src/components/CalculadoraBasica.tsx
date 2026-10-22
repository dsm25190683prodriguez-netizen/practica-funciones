export const Calculadora = () => {
  // Suma de dos números
  const sumar = (a: number, b: number): number => a + b;
  // Resta de dos números
  const restar = (a: number, b: number): number => a - b;
  // Multiplicación de dos números
  const multiplicar = (a: number, b: number): number => a * b;
  // División contemplando la división entre 0
  const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

  const a = 15;
  const b = 4;

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">1. Calculadora</h3>
      <p>{a} + {b} = {sumar(a, b)}</p>
      <p>{a} - {b} = {restar(a, b)}</p>
      <p>{a} × {b} = {multiplicar(a, b)}</p>
      <p>{a} ÷ {b} = {dividir(a, b).toFixed(2)}</p>
    </div>
  );
};