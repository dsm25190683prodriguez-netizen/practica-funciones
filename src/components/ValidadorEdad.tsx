export const ValidadorEdad = () => {
  // Determina si es mayor de edad (>= 18)
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;

  // Genera el mensaje correspondiente según la edad
  const obtenerMensaje = (edad: number): string => {
    return esMayorDeEdad(edad) ? "Puede votar" : `Le faltan ${18 - edad} años`;
  };

  const edades = [15, 18, 25, 12];

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">4. Validador de Edad</h3>
      {edades.map((edad, index) => (
        <p key={index}>
          Edad {edad}: {obtenerMensaje(edad)}
        </p>
      ))}
    </div>
  );
};