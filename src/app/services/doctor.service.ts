import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getAllDoctors(){
    return this.http.get("http://localhost:5126/api/Docteurs");
  }

  createDoctor(formData:any) {
    return this.http.post("http://localhost:5126/api/Docteurs", formData);
  }

}
