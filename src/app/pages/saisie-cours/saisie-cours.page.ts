import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';
import { ApicoursService } from '../../services/apicours.service';

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss'],
})
export class SaisieCoursPage implements OnInit {

  formCours !: FormGroup;

  nameController !: FormControl;
  professeurController !: FormControl;
  nbElevesController !: FormControl;


  constructor(
    private apiCoursService: ApicoursService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.nameController = this.formBuilder.control(
      '', Validators.required
    );
    this.professeurController = this.formBuilder.control(
      '', Validators.required
    );
    this.nbElevesController = this.formBuilder.control(
      '', Validators.required
    );

    this.formCours = this.formBuilder.group({
      name: this.nameController,
      professeur: this.professeurController,
      nbEleves: this.nbElevesController
    });
  }

  onSubmit() {
    if (this.formCours.valid) {
      const cours = new Cours();
      cours.name = this.nameController.value;
      cours.professeur = this.professeurController.value;
      cours.nbEleves = this.nbElevesController.value;
      this.apiCoursService.addCours(cours).subscribe(
       () => this.router.navigate(['/cours'])
      );
    } else {
      console.log('oucou');
    }
  }

}
