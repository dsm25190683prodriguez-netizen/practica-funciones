export const GeneradorPassword = () => {
  // Genera contraseña aleatoria según longitud y caracteres permitidos
  const generarPassword = (
    longitud: number,
    incluirNumeros: boolean,
    incluirSimbolos: boolean
  ): string => {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";

    let caracteres = letras;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    let resultado = "";
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indice];
    }
    return resultado;
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">7. Generador de Contraseñas</h3>
      <p>Básica (8): <code className="bg-gray-100 p-1 rounded text-red-600">{generarPassword(8, false, false)}</code></p>
      <p>Media (12): <code className="bg-gray-100 p-1 rounded text-yellow-600">{generarPassword(12, true, false)}</code></p>
      <p>Fuerte (16): <code className="bg-gray-100 p-1 rounded text-green-600">{generarPassword(16, true, true)}</code></p>
    </div>
  );
};