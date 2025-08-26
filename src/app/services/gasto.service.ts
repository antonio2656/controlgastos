import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Gasto } from '../models/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private coleccion = 'gastos';

  constructor(private firestore: AngularFirestore) {}

  // Obtener todos los gastos
  getGastos() {
    return this.firestore.collection<Gasto>(this.coleccion).valueChanges({ idField: 'id_gastos' });
  }

  // Agregar nuevo gasto
  addGasto(gasto: Gasto) {
    return this.firestore.collection(this.coleccion).add(gasto);
  }

  // Actualizar gasto
  updateGasto(id: string, gasto: Partial<Gasto>) {
    return this.firestore.collection(this.coleccion).doc(id).update(gasto);
  }

  // Eliminar gasto
  deleteGasto(id: string) {
    return this.firestore.collection(this.coleccion).doc(id).delete();
  }
}
