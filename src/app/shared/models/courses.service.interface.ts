import { Observable } from "rxjs";
import { Courses } from "./courses";

export interface ICourseService {

  getCourses(): Observable<Courses[]>
}
