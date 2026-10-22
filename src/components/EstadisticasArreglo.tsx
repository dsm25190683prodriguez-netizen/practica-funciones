export const EstadisticasArreglo = () => {
  // Suma los elementos con reduce y divide entre la longitud
  const calcularPromedio = (nums: number[]): number =>
    nums.reduce((acc, current) => acc + current, 0) / nums.length;

  // Obtiene el valor máximo utilizando Math.max y el operador spread
  const encontrarMaximo = (nums: number[]): number => Math.max(...nums);

  // Obtiene el valor mínimo utilizando Math.min y el operador spread
  const encontrarMinimo = (nums: number[]): number => Math.min(...nums);

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">6. Estadísticas de Arreglo</h3>
      <p>Números: [{numeros.join(', ')}]</p>
      <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
      <p>Máximo: {encontrarMaximo(numeros)}</p>
      <p>Mínimo: {encontrarMinimo(numeros)}</p>
    </div>
  );
};