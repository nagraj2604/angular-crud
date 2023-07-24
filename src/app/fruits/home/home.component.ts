import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allFruits: Fruits[] = [];
  showDeleteModal: boolean = false;
  idTodelete: number = 0;

  constructor(private fruitService: FruitsService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.fruitService.get().subscribe((data) => {
      this.allFruits = data;
    })
  }
  deleteItem(id: number) {
    // this.fruitService.delete(id).subscribe({
    //   next: (data) => {
    //     this.allFruits = this.allFruits.filter(data => data.id != id)
    //   },
    // });
    console.log('cc inside deleteItem', id);
    
    this.idTodelete = id;
    this.showDeleteModal = true;
    console.log('cc idTodelete', this.idTodelete);
    console.log('cc showDeleteModal', this.showDeleteModal);
  }

}
