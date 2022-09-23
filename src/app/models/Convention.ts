export class Convention{
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

  get nombreHeures(): number {
    return this._nombreHeures;
  }

  set nombreHeures(value: number) {
    this._nombreHeures = value;
  }

  private _id: number;

  private _nom: string;

  private _nombreHeures: number;


  constructor(id: number, nom: string, nombreHeures: number) {
    this._id = id;
    this._nom = nom;
    this._nombreHeures = nombreHeures;


  }
}
