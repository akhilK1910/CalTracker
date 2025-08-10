import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormBuilder,Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, DateAdapter } from '@angular/material/core';
import { M } from "../../../node_modules/@angular/material/form-field.d-CMA_QQ0R";
import { MomentDateAdapter } from '@angular/material-moment-adapter';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'DD/MM/yyyy',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};
@Component({
  selector: 'app-chart',
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  providers:[
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    {provide:MAT_DATE_FORMATS,useValue:MY_DATE_FORMATS},
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})

export class ChartComponent implements OnInit{
  selectedDate: Date | null = null;
  mealform!: FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit() {
    this.mealform = this.fb.group({
      date: [null, Validators.required],
      itemName: ['', Validators.required],
      calories: [null],
      protein: [null],
      carbs: [null],
      fats: [null]
    });
  }
  onSubmit() {
    if (this.mealform.valid) {
      console.log('Meal details:', this.mealform.value);
    } else {
      this.mealform.markAllAsTouched();
    }
  }
}