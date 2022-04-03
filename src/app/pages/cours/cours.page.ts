import { Component, OnInit} from '@angular/core';
import { ApicoursService } from '../../services/apicours.service';
import { Cours } from '../../model/cours';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit{

  listeCours!: Cours[] | null;

  title = 'Liste des cours';

  cours!: Cours;

  constructor(private apiCoursService: ApicoursService, private alertController: AlertController) { }

  ngOnInit() {
    this.cours = new Cours();
    this.apiCoursService.findAll().subscribe(
      data => this.listeCours = data
    );
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  submitCours(event: Cours) {
    this.listeCours.push({...event});
  }

  async showAlertDelete(cours: Cours): Promise<void> {
    const alertDelete = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Confirmation de suppression`,
      message: `Souhaitez vous supprimer le cours ${cours.name} avec le professeur ${cours.professeur}`,
      buttons: [
        'Annuler',
        {
          text: 'Supprimer',
          id: 'confirm-button',
          handler: () => {
            this.apiCoursService.deleteCours(cours.id).subscribe(() => {
              this.alertController.dismiss();
              this.ngOnInit();
            });
          }
        }
      ]
    });

    await alertDelete.present();
  }

  async showAlertUpdate(cours: Cours): Promise<void> {
    const alterUpdate = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Modification du cours : ${cours.name}`,
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: cours.name,
          attributes: {
            required: true
          }
        },
        {
          name: 'professeur',
          type: 'text',
          value: cours.professeur,
          placeholder: 'Nom du professeur',
          attributes: {
            required: true
          }
        },
        {
          name: 'nbEleves',
          type: 'number',
          value: cours.nbEleves,
          attributes: {
            required: true
          }
        },
      ],
      buttons: [
        'Annuler',
        {
          text: 'Modifier',
          id: 'confirm-button',
          handler: alertData => {
            cours.name = alertData.name;
            cours.professeur = alertData.professeur;
            cours.nbEleves = alertData.nbEleves;
            this.apiCoursService.updateCours(cours).subscribe(() => {
              this.ngOnInit();
            });
          }
        }
      ]
    });

    await alterUpdate.present();
  }

}
