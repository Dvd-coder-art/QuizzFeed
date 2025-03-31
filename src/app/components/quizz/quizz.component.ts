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
    this.nextStep()
  }

  async nextStep(){
    this.questionIndex+=1

    if (this.questionMaxIndex>this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalResult: string = await this.checkResult(this.answers)
      this.finished = true
      this.answersSelected =  quizz_questions.results[finalResult as keyof
        typeof quizz_questions.results]
      console.log(this.answers)
    }
  }

  async checkResult(answers:string[]){
    const result = answers.reduce((previous,current,index,arr)=>{
      if(
        arr.filter(item=> item === previous).length >
        arr.filter(item => item === current).length 
      ){
        return previous
      }else{
        return current
      }

    })
    return result
  }

  
}
