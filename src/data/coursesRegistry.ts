import { SubjectCourse } from '../types/study';
import { it410Course } from './it410Notes';
import { it401Course } from './it401Notes';
import { cs411Course } from './cs411Notes';
import { electivesCourse } from './electiveNotes';

export const ALL_COURSES: SubjectCourse[] = [
  it410Course,
  it401Course,
  cs411Course,
  electivesCourse,
];

export const getCourseById = (id: SubjectCourse['id']): SubjectCourse => {
  return ALL_COURSES.find((c) => c.id === id) ?? it410Course;
};
