import { Component, OnInit } from '@angular/core';
import { RestDataSource } from '../datasource/rest.datasource';
import { ElectricProduct } from '../model/electric_products';

@Component({
  selector: 'app-electric-product',
  standalone: true,
  imports: [],
  templateUrl: './electric-product.component.html',
  styleUrl: './electric-product.component.css'
})
export class ElectricProductComponent implements OnInit {

  products?: ElectricProduct[] = [];
  product = new ElectricProduct();
  productById = new ElectricProduct();
  id?: number;
  addProduct = new ElectricProduct();
  updateProduct = new ElectricProduct();
  updateId?: number;
  deleteId?: number;

  constructor(private datasource: RestDataSource) {


  }

  ngOnInit(): void {

  }


  // get all

  GetAll() {
    this.datasource.GetAllproducts().subscribe(data => {
      this.products = data;
      return this.products;
    })
  }

  // get by id
  GetById(id: number) {

    this.datasource.GetProductById(id).subscribe(data => {
      this.productById = data;

      return this.productById;
    })

  }



  // add product

  AddProduct(product: ElectricProduct) {
    this.datasource.Addproduct(product).subscribe(data => {
      this.addProduct = data
      return this.addProduct;
    })

  }


  // update product

  UpdateProduct(id: Number, product: ElectricProduct) {
    this.datasource.Updateproduct(this.updateId, this.updateProduct).subscribe(data => {
      this.updateProduct = data
      return this.updateProduct;

    })

  }

  // delete product

  DeleteProduct(id: number) {
    this.datasource.Deleteproduct(id).subscribe(data => {
      this.deleteId = id
      return this.deleteId;
    })

  }
}
