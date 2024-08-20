import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private apiUrl = 'http://localhost:3000/api/socialmedia'; 

    constructor(private http: HttpClient) { }

    getAllSocialMedia(): Observable<any> {
      return this.http.get(`${this.apiUrl}/getAll`);
    }

    addSocialMedia(socialMedia: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/add`, socialMedia);
    }

    updateSocialMedia(socialMedia: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/update`, socialMedia);
    }
  
    removeSocialMedia(id: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/removeById`, { _id: id });
    }

  }
