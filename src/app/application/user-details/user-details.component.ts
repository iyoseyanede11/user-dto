import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/models/app-state.model';
import { User } from 'src/app/store/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  constructor(protected store: Store<AppState>) { }
  storeSubScription: Subscription
  userDetails: User
  ngOnInit(): void {
    this.storeSubScription = this.store.select('payment').subscribe(
      (res: any )=> this.userDetails = res
    );
  }

  ngOnDestroy(): void{
    if(this.storeSubScription)
      this.storeSubScription.unsubscribe();
  }

}
