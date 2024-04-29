import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ElectricProductComponent } from '../electric-product/electric-product.component'
import { RestDataSource } from '../datasource/rest.datasource';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        ElectricProductComponent
    ],
    providers: [RestDataSource]
})
export class ElectricProductModule { }
