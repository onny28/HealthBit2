import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-try',
  templateUrl: './try.page.html',
  styleUrls: ['./try.page.scss'],
})
export class TryPage implements OnInit {

  public form: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder) { }

  ngOnInit() {
    this.form = this._FB.group({
      name: ['', Validators.required],
      technologies: this._FB.array([
         this.initTechnologyFields()
      ])
   });
  }
   
  initTechnologyFields():FormGroup
{
   return this._FB.group({
      name : ['', Validators.required]
   });
}

addNewInputField() : void
{
   const control = <FormArray>this.form.controls.technologies;
   control.push(this.initTechnologyFields());
}

removeInputField(i : number) : void
{
   const control = <FormArray>this.form.controls.technologies;
   control.removeAt(i);
}

manage(val : any) : void
{
   console.dir(val);
}
//   data = {
//     "title": "testing title",
//     "paragraphs": [
//       { "paragraph": "testing paragraph 1" },
//       { "paragraph": "testing paragraph 2" },
//       { "paragraph": "testing paragraph 3" }
//     ]
//   }


// addParagraph(){
//     this.data.paragraphs.push( { "paragraph": "" });
//  }

// delParagraph(paragraphID){
//     this.data.paragraphs.splice(paragraphID,1);
// }
}
