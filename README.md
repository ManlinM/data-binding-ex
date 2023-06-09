# What I learnt
## Angular Data Binding Excercise
Databinding can be translate as the communication between Typescript and HTML template
- 3 types of binding
  - Property binding: ([property]="data")
    - In this type of binding, data pass to the template from ts class by Angular
  - Event binding: ((event)="expression")
    - In this senario, data pass back to ts class from template by Angular
  - Two-Way-Binding: ([(ngModel)]="data")
    - Before using: need to import and add FormsModule in app.module.ts, as well as in the imports[]
    - Import FormsModule in app.component 
    - In this case, data is passed both way.
