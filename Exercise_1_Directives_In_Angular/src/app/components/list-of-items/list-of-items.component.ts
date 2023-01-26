import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent {


  items=[
  {
    check:false,
    label:"Banane"
  },
  {
    check:false,
    label:"manioc"
  },
  {
    check:true,
    label:"Riz bete"
  },
  {
    check:false,
    label:"Gombo"
  },
  {
    check:true,
    label:"magni"
  },
  {
    check:false,
    label:"igname"
  },
  {
    check:true,
    label:"Cacao"
  }
]

}
