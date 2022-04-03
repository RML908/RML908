import { Component, Input } from "@angular/core";
import { Post } from "../app.component";

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']

})
export class LessonComponent {
@Input()post: Post



}
