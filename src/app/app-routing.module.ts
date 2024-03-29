import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';
import { GestionunoComponent } from './components/gestionuno/gestionuno.component';
import { EliminarArtComponent } from './components/eliminar-art/eliminar-art.component';
import { EliminarHistoriaComponent } from './components/eliminar-historia/eliminar-historia.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"fundamentos", component: FundamentosComponent},
  {path:"login", component: LoginComponent},
  {path:"gestion", component: GestionComponent},
  {path:"gestionUno", component: GestionunoComponent},
  {path: 'eliminar-art', component: EliminarArtComponent },
  {path: 'eliminar-historia', component: EliminarHistoriaComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
