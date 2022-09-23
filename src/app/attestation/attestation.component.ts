import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant.service'
import {Etudiant} from "../models/Etudiant";

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {
  etudiants$: Etudiant[] = [];
  current: Etudiant | undefined;
  text: string  | undefined;


  constructor(private  etuService: EtudiantService) { }
  ngOnInit(): void {
    this.etuService.getMockEtuidants().subscribe(data => this.etudiants$ = data)
  }

  onOptionsSelected(value: string) {
    console.log(value)
    const id = Number.parseInt(value)
    this.current= this.etudiants$.find(ele => ele.id == id)
    this.text = `   Bonjour ${this.current?.nom} ${this.current?.prenom},
    Vous avez suivi ${this.current?.convection.nombreHeures} de formation chez FormationPlus.
    Pouvez-vous nous retourner ce mail avec la pièce jointe signée.
    Cordialement,
    FormationPlus`

  }
}
