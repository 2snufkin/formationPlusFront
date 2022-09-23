import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Etudiant} from "./models/Etudiant";
import {Convention} from "./models/Convention";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseurl = 'http://localhost:8080/api/etudiants';
  list_etudiants: Etudiant[] = []



  constructor(private http: HttpClient) {
  }

  // get all etudiants via HTTP request
  getAlletudiants(): Observable<GetResponse> {
    return this.getProductList(this.baseurl);
  }

  getMockEtuidants(): Observable<Etudiant[]>{
     const convection4= new Convention(4567, '#GF1234', 15)
     const convection = new Convention(1234, '#GE5678', 27)
     const convection2 = new Convention(14787, '#GE2468538', 11)
     const convection3 = new Convention(15447, '#GE1445468', 31)
    let etud1 = new Etudiant(4545, 'Da Vinci', 'Leonardo', 'brad@gmail.com', convection4);
    let etud2 = new Etudiant(124, 'Buonarroti', 'Michelangelo', 'gc@gmail.com', convection );
    let etud3 = new Etudiant(748, 'di Niccolò di Betto', 'Donatello', 'gc@gmail.com', convection2);
    let etud4 = new Etudiant(57575, 'Santi', 'Raphael', 'gc@gmail.com', convection3 );
    this.list_etudiants.push(etud1)
    this.list_etudiants.push(etud2)
    this.list_etudiants.push(etud3)
    this.list_etudiants.push(etud4)

        return  of(this.list_etudiants)
  }
  /**
   * a utility method. I shouldn't call it outside the service
   * @param url will vary
   */
  getProductList(url: string): Observable<GetResponse> {
    return this.http.get<GetResponse>(url);
  }

}

interface GetResponse {
  _embedded: {
    etudiants: Etudiant[];
  };
  page: {
    totalElements: number,
    totalPages: number,
    number: number
  };
}




