import { Injectable } from '@angular/core';
import { IProjectsService } from '../models/projects.service.interface';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../models/projects';
import { Observable, of } from 'rxjs';
import projects from '../mocks/projects.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService implements IProjectsService {
  constructor(private httpClient: HttpClient) {}

  private projects: Projects[] = projects;

  getProjects(): Observable<Projects[]> {
    return of(this.projects);
  }

  getProject(id: number): Observable<Projects> {
    return of(this.projects.find((project) => project.id === id)!);
  }
}
