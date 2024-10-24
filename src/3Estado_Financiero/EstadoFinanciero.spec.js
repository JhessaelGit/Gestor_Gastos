import EstadoFinanciero from "./EstadoFinanciero";

describe("EstadoFinanciero", () => {
  let estadoFinanciero;

  beforeEach(() => {
    estadoFinanciero = new EstadoFinanciero();
  });

  it("debería registrar y ver ingresos", () => {
    const ingreso = { fecha: "2024-10-15", monto: 1853, descripcion: "salario" };
    estadoFinanciero.ingresos.push(ingreso);
    expect(estadoFinanciero.verIngresos()).toEqual([ingreso]);
  });

  it("debería registrar y ver gastos", () => {
    const gasto = { fecha: "2024-10-12", monto: 45, descripcion: "compra de libros" };
    estadoFinanciero.gastos.push(gasto);
    expect(estadoFinanciero.verGastos()).toEqual([gasto]);
  });

  it("debería calcular el porcentaje de ingresos gastados", () => {
    estadoFinanciero.ingresos.push({ fecha: "2024-10-15", monto: 1000 });
    estadoFinanciero.gastos.push({ fecha: "2024-10-12", monto: 300 });
    expect(estadoFinanciero.porcentajeIngresosGastados()).toBe(30);
  });

  it("debería descontar del presupuesto correctamente", () => {
    estadoFinanciero.descontarDelPresupuesto({ monto: 200 });
    expect(estadoFinanciero.verPresupuesto()).toBe(800); 
  });
});
