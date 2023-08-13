import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects.service';
import { Projects } from '../shared/models/projects';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  cursorInIndex?: number;
  id?: number;

  projects: Projects[] = [];
  projectSelected: Projects = {
    id: 0,
    name: '',
    company: '',
    description: '',
    img: '',
    logo: '',
  };

  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.id = this.activeRoute?.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.id) {
      this.projectsService
        .getProject(this.id)
        .subscribe((project: Projects) => {
          this.projectSelected = project;
        });
    } else
      this.projectsService
        .getProjects()
        .subscribe((projects: Projects[]) => (this.projects = projects));
  }

  redirectTo(id: number): void {
    this.router.navigate([`projects/${id}/details`]);
  }
}
