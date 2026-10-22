export const CarritoCompras = () => {
  // Calcula el subtotal individual por producto
  const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;
  // Calcula el IVA del 16%
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;
  // Calcula el total general
  const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);
  // Formatea un número a formato de moneda ($XX.XX)
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

  const carrito = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 },
  ];

  // Acumulación del subtotal general usando reduce
  const subtotalGeneral = carrito.reduce(
    (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
    0
  );

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm mb-4 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">10. Carrito de Compras</h3>
      {carrito.map((item, index) => (
        <p key={index}>
          {item.producto} x{item.cantidad} = {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}
        </p>
      ))}
      <hr className="my-2 border-gray-200" />
      <p>Subtotal: {formatearPrecio(subtotalGeneral)}</p>
      <p>IVA (16%): {formatearPrecio(calcularIVA(subtotalGeneral))}</p>
      <p className="text-lg">
        <strong>Total: {formatearPrecio(calcularTotal(subtotalGeneral))}</strong>
      </p>
    </div>
  );
};