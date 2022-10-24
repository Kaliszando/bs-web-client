import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TokenResponseInterceptor } from "./core/interceptor/token-response.interceptor";
import { TokenRequestInterceptor } from "./core/interceptor/token-request.interceptor";
import { ErrorCatchingInterceptor } from "./core/interceptor/error-response.interceptor";
import { MatDialogModule } from "@angular/material/dialog";
import { SuccessResponseInterceptor } from "./core/interceptor/success-response.interceptor";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { NgxMatFileInputModule } from "@angular-material-components/file-input";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ApiInterceptor } from "./core/interceptor/api.interceptor";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule,
    NgxMatFileInputModule,
    NgxChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCatchingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessResponseInterceptor, multi: true },

    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3500 } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
