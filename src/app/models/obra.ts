
  export interface Obra {
  id_obra?: string; // opcional si usas firestore
  nombre_obra: string;
  direccion: string;
  cliente: string;
  estatus: string;
  fecha_inicio: string;
  fecha_fin: string;   // ya tienes esto
  responsable: string;
  importe_presupuesto: string;
  observaciones: string;

 
}
