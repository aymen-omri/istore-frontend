import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LightGallery } from 'lightgallery/lightgallery';
import { ProductService } from 'src/app/Utils/Services/Product.service';
import lgZoom from 'lightgallery/plugins/zoom'
import { InitDetail } from 'lightgallery/lg-events';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.id_product = Number(this.route.snapshot.paramMap.get('id'));
    this.findProductById();
  }

  constructor(private route: ActivatedRoute, private productService: ProductService, private sanitizer: DomSanitizer) { }

  id_product: number = 0;
  product: any;
  images: any[] | undefined;
  private lightGallery!: LightGallery;
  private needRefresh = false;
  selectedImage: any;

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  onInit = (detail: InitDetail): void => {
    this.lightGallery = detail.instance;
  };


  findProductById() {
    this.productService.getProductById(this.id_product).subscribe((data: any) => {
      this.product = data;
      this.images = this.product.images;
      if (this.images) {
        this.selectedImage = this.images[0];
      }
    });
  }

  stepSize = 200;

  selectImage(id: number) {
    this.selectedImage = this.images?.find((img: any) => img.image_id === id);

  }

  openSelectedImage() {
    this.lightGallery.openGallery(this.images?.indexOf(this.selectedImage));
  }

  scrollBackReviews() {
    const container = document.querySelector('.others');
    if (container) {
      container.scrollLeft -= this.stepSize;
    }
  }

  scrollForwardReviews() {
    const container = document.querySelector('.others');
    if (container) {
      container.scrollLeft += this.stepSize;
    }
  }

  redirectToBuyLink(buyLink: string | undefined): void {
    if (buyLink) {
      window.location.href = buyLink;
    }
  }

}
