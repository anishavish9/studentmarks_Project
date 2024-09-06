import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentMarks(username: string): Observable<any[]> {
    // Mock student data
    const studentMarks = [
      { rollNo: '101', sem1: 80, sem2: 85, sem3: 90, total: 255 }
      // Add more mock data if needed
    ];
    return of(studentMarks);
  }

  updateStudent(student: any): Observable<any> {
    console.log('Updating student', student);
    return of(student); // Mock implementation
  }

  addStudent(student: any): Observable<any> {
    console.log('Adding new student', student);
    return of(student); // Mock implementation
  }

  deleteStudent(rollNo: string): Observable<any> {
    console.log('Deleting student with rollNo', rollNo);
    return of({}); // Mock implementation
  }
}

