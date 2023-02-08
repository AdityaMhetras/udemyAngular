import { Component } from '@angular/core';

@Component({
  selector: 'app-app-assignment',
  templateUrl: './app-assignment.component.html',
  styleUrls: ['./app-assignment.component.css']
})
export class AppAssignmentComponent {

  private showParagraph = true;

  public getShowParagraph() {
    return this.showParagraph;
  }

  public setShowParagraph(showParagraph) {
    this.showParagraph = showParagraph;
  }

  public toggleShowParagraph() {
    if(this.getShowParagraph() === true){
      this.setShowParagraph(false);
    }else{
      this.setShowParagraph(true);
    }
  }
}
