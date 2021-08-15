import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//import để sử dụng directive
import { FormsModule } from '@angular/forms';
import { BaitapComponent } from './Baitap.component';
import { BaiTapLoginComponent } from './Baitap5.component';
import { BaiTapQLSPComponent } from './Baitap6.component';



@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [BaitapComponent],
    declarations: [BaiTapLoginComponent,BaitapComponent,BaiTapQLSPComponent],
    providers: [],
})
export class BaiTapModule { }
