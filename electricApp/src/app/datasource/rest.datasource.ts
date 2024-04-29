import { Injectable } from "@angular/core";
import { catchError, from, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ElectricProduct } from "../model/electric_products";

const PROTOCOL = "http";
const PORT = 3000
@Injectable()
export class RestDataSource {

    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }


    //User -- 
    GetAllproducts(): Observable<ElectricProduct[]> {
        return this.http.get<ElectricProduct[]>(this.baseUrl + "api/electricProducts");
    }

    GetProductById(id: any): Observable<any> {
        return this.http.get<any>(this.baseUrl + "api/electricProducts?id=" + id);
    }

    Addproduct(electronicProduct: ElectricProduct): Observable<any> {
        return this.http.post<any>(this.baseUrl + "api/electricProducts", electronicProduct);
    }

    Updateproduct(id: any, electronicProduct: ElectricProduct): Observable<any> {
        return this.http.put<any>(this.baseUrl + "api/electricProducts?id=" + id, electronicProduct)
            .pipe(catchError((error) => {
                return error.message;
            }));
    }

    Deleteproduct(id: any): Observable<any> {
        return this.http.delete<any>(this.baseUrl + "api/electricProducts/id?id=" + id)
            .pipe(catchError((error) => {
                return error.message;
            }));
    }

}