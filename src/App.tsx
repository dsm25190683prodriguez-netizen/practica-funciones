import { Calculadora } from './components/CalculadoraBasica';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        📚 Práctica de Funciones en TypeScript + React
      </h1>
      
      <Calculadora />
      <ConversorTemperatura />
      <CalculadoraIMC />
      <ValidadorEdad />
      <AnalizadorTexto />
      <EstadisticasArreglo />
      <GeneradorPassword />
      <AplicadorDescuentos />
      <SistemaCalificaciones />
      <CarritoCompras />
    </div>
  );
}

export default App;