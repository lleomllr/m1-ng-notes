import { Component } from '@angular/core';
import { Notes } from '../note.model';
import { StorageService } from '../storage.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  notes : Notes[] = []; 

  constructor(private storage: StorageService) {}

  ngOnInit() : void {
    this.notes = this.storage.getNotes(); 
  }

  getTagNames(note: Notes): string[] {
    return note.tags.map(tag => tag.name);
  }
  
  getTagColors(note: Notes): string[] {
    return note.tags.map(tag => tag.color);
  }  
}
