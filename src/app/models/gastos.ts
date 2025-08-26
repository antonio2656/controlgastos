export interface Gasto {
  id_gastos?: string;
  tipo: 'materiales' | 'mano de obra';
  fecha: Date;
  proveedor: string;
  id_factura: string;
  id_obra: string;
  id_detalle_gastos_factura: string;
  sub_total: number;
  iva: number;
  total: number;
}
