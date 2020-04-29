import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestinputComponent } from './testinput/testinput.component';
import { NgxRouteParamsInputComponent } from 'ngx-route-params-input';


const routes: Routes = [{
  path: 'test',
  children: [{
    path: ':input',
    component: NgxRouteParamsInputComponent,
    data: {
      ngxRouteParamsInput: {
        component: TestinputComponent,
        routeParams: {
          input: 'testInput'
        },
        queryParams: {
          content: 'contentInput'
        }
      }
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
