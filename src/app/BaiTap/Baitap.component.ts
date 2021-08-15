import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap',
    template: `
    <div class="container-fluid mt-5">
    <h3 class="mb-3">Bài tập login</h3>
    <app-bt-login></app-bt-login>
    <br/><br/>
    <h3 >Bài tập quản lý sản phẩm</h3>
    <app-bt-qlsp></app-bt-qlsp>
    </div>
   
    `
})

export class BaitapComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}