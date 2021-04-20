import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

import { User } from '../../models/user.model'
import { Course } from '../../../models/course.model'
import { ConfigService } from '../config/config.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCourses$: Observable<Course[]> = this.getUserCourses$()

  user$ = new BehaviorSubject<User>(<User>{
    profile: {
      id: 0,
      email: 'anon@cultivatelearning.ca',
      emailVerified: 0,
      firstName: 'NA',
      lastName: 'NA',
      username: 'Anon',
      picture: 'default.jpg',
      country: 'Canada'
    },
    roles: '["learner"]'
  })

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  getUserCourses$(): Observable<Course[]> {
    this.userCourses$ = this.httpClient
      .get<Course[]>(`${this.configService.params.api.v1.path}/user/courses.php`)
      .pipe(shareReplay(1))
    return this.userCourses$
  }

  getUser() {
    return this.httpClient
      .get<User>(`${this.configService.params.api.v1.path}/user/`)
      .pipe(profile => profile)
  }

}
