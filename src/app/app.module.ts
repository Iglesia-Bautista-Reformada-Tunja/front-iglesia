import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
//import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';
//import { NuestroPastorComponent } from './components/nuestro-pastor/nuestro-pastor.component';
import { GestionunoComponent } from './components/gestionuno/gestionuno.component';
import { AuthGuard } from './guard/auth.guard';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { HorarioComponent } from './components/horario/horario.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


//material navbar
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './components/footer/footer.component';
import { ShowModalComponent } from './components/show-modal/show-modal.component';
import { EliminarArtComponent } from './components/eliminar-art/eliminar-art.component';
import { EliminarHistoriaComponent } from './components/eliminar-historia/eliminar-historia.component';
import { InterceptorService } from './services/interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    GestionComponent,
    NosotrosComponent,
    HomeComponent,
    //NuestroPastorComponent,
    FundamentosComponent,
    //HorarioComponent,
    GestionunoComponent,
    FooterComponent,
    ShowModalComponent,
    EliminarArtComponent,
    EliminarHistoriaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),

    //angular material
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,


    
  ],
  providers: [AuthGuard, 
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
