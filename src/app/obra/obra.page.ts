import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { ObraService } from '../services/obra.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.page.html',
  imports: [CommonModule, FormsModule, IonicModule],
  styleUrls: ['./obra.page.scss'],
})
export class ObraPage implements OnInit {
  obra = {
    nombre_obra: '',
    direccion: '',
    cliente: '',
    estatus:'',
    fecha_inicio: '',
    fecha_fin: '',
    responsable: '',
    importe_presupuesto: '',
    observaciones: ''
  };

  constructor(
    private alertCtrl: AlertController,
    private obraService: ObraService,
    private router: Router
  ) {}

  ngOnInit() {}

  async guardarObra() {
  try {
    await this.obraService.addObraConId(this.obra);
    const alert = await this.alertCtrl.create({
      header: 'Éxito',
      message: 'Obra guardada correctamente',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['/dashboard']);
  } catch (error) {
    console.error('Error al guardar obra:', error);
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'No se pudo guardar la obra',
      buttons: ['OK']
    });
    await alert.present();
  }
}

}
