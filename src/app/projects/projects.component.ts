import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects.service';
import { Projects } from '../shared/models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService
      .getProjects()
      .subscribe((projetos) => (this.projects = projetos));
  }
}
