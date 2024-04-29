import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ElectricProductComponent } from './electric-product.component';
import { RestDataSource } from '../datasource/rest.datasource';
import { ElectricProduct } from '../model/electric_products';
import { ElectricProductModule } from '../model/electric_product.module';
import { of } from 'rxjs';

describe('ElectricProductComponent', () => {
  let component: ElectricProductComponent;
  let fixture: ComponentFixture<ElectricProductComponent>;
  let dataSource: RestDataSource;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule, ElectricProductModule],
      providers: [RestDataSource]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricProductComponent);
    component = fixture.componentInstance;
    dataSource = TestBed.inject(RestDataSource);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all products', () => {
    const mockProducts: ElectricProduct[] = [
      { id: 1, productName: 'HP Laptop', productCost: 30000, productColour: 'black' },
      { id: 2, productName: 'Smart TV', productCost: 90000, productColour: 'White' }
    ];

    spyOn(dataSource, 'GetAllproducts').and.returnValue(of(mockProducts));

    component.GetAll();

    expect(component.products).toEqual(mockProducts);
  });

  it('should get product by id', () => {
    const id = 1;
    const mockProduct: ElectricProduct = { id: 1, productName: 'HP Laptop', productCost: 30000, productColour: 'black' };

    spyOn(dataSource, 'GetProductById').and.returnValue(of(mockProduct));

    component.GetById(id);

    expect(component.productById).toEqual(mockProduct);
  });

  it('should add product', () => {
    const mockProduct: ElectricProduct = { productName: 'Washing Machine', productCost: 60000, productColour: 'Pink' };

    spyOn(dataSource, 'Addproduct').and.returnValue(of(mockProduct));

    component.AddProduct(mockProduct);

    expect(component.addProduct).toEqual(mockProduct);
  });

  it('should update product', () => {
    const id = 1;
    const mockProduct: ElectricProduct = { productName: 'Hp Laptop', productCost: 90000, productColour: 'Green' };

    spyOn(dataSource, 'Updateproduct').and.returnValue(of(mockProduct));

    component.UpdateProduct(id, mockProduct);

    expect(component.updateProduct).toEqual(mockProduct);
  });

  it('should delete product', () => {
    const id = 5;

    spyOn(dataSource, 'Deleteproduct').and.returnValue(of(null));

    component.DeleteProduct(id);

    expect(component.deleteId).toEqual(id);
  });
});