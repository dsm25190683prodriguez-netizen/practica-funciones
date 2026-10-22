export const SistemaCalificaciones = () => {
  // Calcula el promedio de un arreglo de calificaciones
  const calcularPromedio = (calificaciones: number[]): number =>
    calificaciones.reduce((acc, cal) => acc + cal, 0) / calificaciones.length;

  // Asigna una letra de equivalencia según la nota
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };

  // Verifica si la calificación promedio aprueba (>= 70)
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] },
  ];

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">9. Sistema de Calificaciones</h3>
      {alumnos.map((alumno, index) => {
        const promedio = calcularPromedio(alumno.califs);
        const letra = obtenerLetra(promedio);
        const aprobado = estaAprobado(promedio);

        return (
          <p key={index}>
            {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} -{" "}
            <span className={aprobado ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
              {aprobado ? "Aprobado" : "Reprobado"}
            </span>
          </p>
        );
      })}
    </div>
  );
};