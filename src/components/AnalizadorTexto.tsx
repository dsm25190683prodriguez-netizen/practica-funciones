export const AnalizadorTexto = () => {
  // Cuenta palabras dividiendo la cadena por espacios
  const contarPalabras = (texto: string): number => texto.trim().split(/\s+/).length;

  // Cuenta vocales (mayúsculas, minúsculas y acentuadas) usando expresión regular
  const contarVocales = (texto: string): number => (texto.match(/[aeiouáéíóú]/gi) || []).length;

  // Invierte el orden de los caracteres
  const invertirTexto = (texto: string): string => texto.split('').reverse().join('');

  const texto = "Hola mundo desde TypeScript";

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">5. Analizador de Texto</h3>
      <p>Texto: "{texto}"</p>
      <p>Palabras: {contarPalabras(texto)}</p>
      <p>Vocales: {contarVocales(texto)}</p>
      <p>Invertido: {invertirTexto(texto)}</p>
    </div>
  );
};