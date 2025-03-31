import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🚀 Importação necessária

import quizz_questions from "../../../assets/data/quizz_questions.json"; 

@Component({
  selector: 'app-quizz',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  title: string = "";
  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answersSelected: string = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

      this.questionSelected = this.questions[this.questionIndex];
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    console.log(this.answers);
  }

  async nextSteo(){
    this.questionIndex+=1

    if (this.questionIndex>this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true
    }
  }
}
