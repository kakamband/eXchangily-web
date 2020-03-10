
import { NgModule } from '@angular/core';
import { PinNumberModal } from './modals/pin-number/pin-number.modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [
        PinNumberModal
    ],
    imports: [
        ModalModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        TranslateModule
        /*
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }), 
        */       
    ],
    exports: [
        PinNumberModal,
        TranslateModule
    ],
    providers: [
    ]
})
export class SharedModule { }