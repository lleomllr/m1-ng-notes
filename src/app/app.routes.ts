import { Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { Notes } from './note.model';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'notes', component: NotesComponent}, 
    {path: 'tags', component: TagsComponent}, 
    {path: '', component: HomeComponent}

];


