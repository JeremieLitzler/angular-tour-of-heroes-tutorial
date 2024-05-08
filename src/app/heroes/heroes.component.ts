import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
@Component({
  // standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  // imports: [NgFor],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
