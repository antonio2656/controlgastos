import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, deleteDoc, doc, collectionData } from '@angular/fire/firestore';
import { Cliente } from '../models/cliente';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private coleccion = 'clientes';

  constructor(private firestore: Firestore) {}

  getClientes() {
    const ref = collection(this.firestore, this.coleccion);
    return collectionData(ref, { idField: 'id_cliente' });
  }

  addCliente(cliente: Cliente) {
    const ref = collection(this.firestore, this.coleccion);
    return addDoc(ref, cliente);
  }

  updateCliente(id: string, cliente: Partial<Cliente>) {
    const ref = doc(this.firestore, `${this.coleccion}/${id}`);
    return updateDoc(ref, cliente);
  }

  deleteCliente(id: string) {
    const ref = doc(this.firestore, `${this.coleccion}/${id}`);
    return deleteDoc(ref);
  }
}
