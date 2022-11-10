import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverContainerComponent } from './driver-container/driver-container.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {
  path:'',pathMatch:'full',redirectTo:'/user'
},
{
  path:'user',pathMatch:'full',component:SideNavComponent
},

{
  path:'driver',component:DriverContainerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
