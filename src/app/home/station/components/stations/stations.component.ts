import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserCrudService } from 'src/app/home/user/service/user-crud.service';
import { Station } from '../../model/station';
import { StationCrudService } from '../../service/station-crud.service';
import { User } from '../../../user/model/user';
import { UserStation } from '../../../user/model/user';
import { logging } from 'protractor';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'clt-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  @Input() user!: User;

  public stationForm: FormGroup | undefined
  public stations: Station[] = [];
  public loading: boolean = false
  public filterTerm!: string;


  constructor(private stationCrudService: StationCrudService,
    private userCrudService: UserCrudService,
    private formBuilder: FormBuilder) { }

    filterBy(filter: string){
    this.filterTerm = filter
   }

  updateStation(station: Station) {
    this.loading = true
    let userToggle: UserStation = {
      id: 0,
      user: this.user.id,
      station: station.id
    }

    this.userCrudService.toggleUserStation(userToggle)
      .pipe(
        finalize(() => {
          this.loading = false
        })
      )
      .subscribe(
        (user => {
          this.user = user as User
          console.log(this.user)
        })

      )

  }

  isFavorite(station: Station) {
    return this.user?.stations.includes(station.id)
  }


  onSubmit() {
    console.log(this.stationForm?.invalid)

  }

  ngOnInit(): void {

    this.stationCrudService.stations().subscribe(
      stations => {
        this.stations = stations
      }

    )
  }

}

