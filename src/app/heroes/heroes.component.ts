import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../sample-data/mock-heroes';

@Component({
  // standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  // imports: [NgFor],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
}
