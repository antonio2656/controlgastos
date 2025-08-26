import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, updateDoc, deleteDoc, collectionData, addDoc } from '@angular/fire/firestore';
import { Obra } from '../models/obra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  private coleccion = 'obras';

  constructor(private firestore: Firestore) {}

  // Obtener todas las obras como Observable
  getObrasSnapshot(): Observable<Obra[]> {
    const obrasRef = collection(this.firestore, this.coleccion);
    return collectionData(obrasRef, { idField: 'id_obra' }) as Observable<Obra[]>;
  }

  // Agregar nueva obra con ID
  addObraConId(obra: Obra) {
  
    const ref = collection(this.firestore, this.coleccion);
    return addDoc(ref, obra);
  }
  

  // Actualizar obra
  updateObra(id: string, obra: Partial<Obra>) {
    const obraRef = doc(this.firestore, `${this.coleccion}/${id}`);
    return updateDoc(obraRef, obra);
  }

  // Eliminar obra
  deleteObra(id: string) {
    const obraRef = doc(this.firestore, `${this.coleccion}/${id}`);
    return deleteDoc(obraRef);
  }
}