import { Component, OnChanges, Input, SimpleChanges, EventEmitter, Output } from '@angular/core'
@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    constructor(){
        console.log("Hello Ya Abo Hafez, Elsho3'l tamam w 3al el3al");
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating *75 / 5;
    }

    onClick(): void{
        this.ratingClicked.emit(`the rating is ${this.rating}`)
    }
}