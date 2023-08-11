import { Observable } from 'rxjs';
import { Projects } from './projects';

export interface IProjectsService {
  getProjects(): Observable<Projects[]>;

  getProject(id: number): Observable<Projects>;
}
