import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.Spprod1CategoryModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.Spprod1ProductModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Spprod1EntityModule {}
