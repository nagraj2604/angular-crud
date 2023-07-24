import { Component } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  }

  constructor(private FruitService: FruitsService, private router: Router) { }
  ngOnInit(): void { }

  create() {
    this.FruitService.create(this.fruitForm).subscribe({
      next: (data) => {
        this.router.navigate(["fruits/home"]);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }

    })
  }
}
