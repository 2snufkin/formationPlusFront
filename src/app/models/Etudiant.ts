import {Convention} from "./Convention";

export class Etudiant {

  private _id: number;

  private _nom: string;

  private _prenom: string;

  private _mail: string;

  private _convection: Convention;


  constructor(id: number, nom: string, prenom: string, mail: string, convection: Convention) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
    this._mail = mail;
    this._convection = convection;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get convection(): Convention {
    return this._convection;
  }

  set convection(value: Convention) {
    this._convection = value;
  }
}
