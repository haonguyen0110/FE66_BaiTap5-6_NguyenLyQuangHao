import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-qlsp',
    template: `
    
    <div>
        <div class="card mb-5 mt-3">
            <div class="card-header bg-dark text-white">Quản lý danh mục sản phẩm</div>
            <div class="card-body">
                <div >
                    <p>Mã sản phẩm</p>
                    <input class="form-control" [(ngModel)]="SP.maSP">
                </div>
                <div >
                    <p>Tên sản phẩm</p>
                    <input class="form-control"[(ngModel)]="SP.tenSP">
                </div>
                <div>
                    <p>Giá</p>
                    <input class="form-control"[(ngModel)]="SP.gia">
                </div>
            </div>

            <div class="card-footer">
                <button class="btn btn-success" (click)="themSP()">Thêm sản phẩm</button>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr class="bg-dark text-white">
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                </tr>
            </thead>

            <tbody>
                <tr *ngFor="let sanPham of mangSP ; let i =index" [ngClass]="{'bg-light':(i+1)%2===0}">
                    <td>{{sanPham.maSP}}</td>
                    <td>{{sanPham.tenSP}}</td>
                    <td>{{sanPham.gia}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    `
})

export class BaiTapQLSPComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    mangSP:SanPham[]=[
        {maSP:'1',tenSP:'Sản phẩm 1',gia:1000}
    ]
    SP:SanPham={maSP:'',tenSP:'',gia:0}

    themSP=()=>{
        this.mangSP.push({...this.SP})
    }
}

interface SanPham{
    maSP:string,
    tenSP:string,
    gia:number
}