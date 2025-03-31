import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})


export class QuizzComponent implements OnInit{
  title:string = ""

  questions:any 
  questionSelected:any


  answers:string[] = []
  answersSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor(){}
  ngOnInit(): void {
  }

}
