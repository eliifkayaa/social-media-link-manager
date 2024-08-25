import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private apiUrl = 'http://localhost:3000/api/socialmedia'; 

    constructor(private http: HttpClient) {}

  // Dönüş tipi Observable'dır, yani veriler asenkron olarak döner.
    getAll(): Observable<any> {
      return this.http.get(`${this.apiUrl}/getAll`);
    }

    add(socialMedia: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/add`, socialMedia);
    }

    update(socialMedia: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/update`, socialMedia);
    }
  
    remove(id: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/removeById`, { _id: id });
    }

    getLinkById(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/getById/${id}`);
    }

  }
