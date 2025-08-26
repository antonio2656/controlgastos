import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AlertController, IonButton, IonContent, IonicModule, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { IonHeader } from '@ionic/angular/standalone';
@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss']
})

export class ClientePage implements OnInit {
  
  cliente = {
    nombre: '',
    apellido: '',
    nombre_razon_social: '',
    contacto: '',
    rfc: '',
    correo: '',
    telefono: '',
    direccion: ''
  };

  constructor(
    private alertCtrl: AlertController,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  // 🔹 No lances un error en ngOnInit, lo dejamos vacío
  ngOnInit(): void {}

  async guardarCliente() {
  try {
    await this.clienteService.addCliente(this.cliente);
    const alert = await this.alertCtrl.create({
      header: 'Éxito',
      message: 'Cliente guardado correctamente',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['/dashboard']);
  } catch (error) {
    console.error('Error al guardar cliente:', error);
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'No se pudo guardar el cliente',
      buttons: ['OK']
    });
    await alert.present();
  }
}
}
