import { MatToolbarModule, MatIconModule, MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {}
