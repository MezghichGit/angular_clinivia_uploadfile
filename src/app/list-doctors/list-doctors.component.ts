import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrl: './list-doctors.component.css'
})
export class ListDoctorsComponent implements OnInit {

  doctors: any;
  constructor(private doctoreService: DoctorService) {

  }
  ngOnInit(): void {
    this.doctoreService.getAllDoctors().subscribe(
      data => {
        console.log(data)
        this.doctors = data
      }
    );
  }

}
