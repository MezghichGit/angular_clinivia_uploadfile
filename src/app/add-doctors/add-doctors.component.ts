import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrl: './add-doctors.component.css'
})
export class AddDoctorsComponent {
  doctor:any;
  firstName:any;
  lastName:any;
  email:any;
  gender:any;
  mobile:any;
  password:any;
  education:any;
  dateBirth:any;
  departementId:any;

  constructor(private doctorService: DoctorService) { }
  photo: File | null = null;
  onFileChange(event: any): void {
    this.photo = event.target.files[0];
  }

  createDoctor(): void {

    let formData = new FormData();
    formData.append('firstName', this.firstName);
    formData.append('lastName', this.lastName);
    formData.append('email', this.email);
    formData.append('gender', this.gender);
    formData.append('mobile', this.mobile);
    formData.append('password', this.password);
    formData.append('education', this.education);
    //formData.append('dateBirth', new Date());
    formData.append('departementId', '1');
    if (this.photo) {
      formData.append('photo', this.photo);
    }
    this.doctorService.createDoctor(formData).subscribe(data => {
      console.log('Docteur créé avec succès', data);
    });
  }

}
