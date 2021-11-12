import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WordpressServerService } from './../services/wordpress-server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    public router: Router,
    public http: HttpClient,
    private server: WordpressServerService
  ) {
    console.log('alamat endpoint :', this.server.endPoint);
}

// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
}
