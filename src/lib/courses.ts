export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CodingExercise {
  language: "javascript" | "python";
  instructions: string;
  starterCode: string;
  solution: string;
  expectedOutput?: string;
  hints?: string[];
}

export interface LessonSection {
  type: "text" | "code" | "quiz" | "callout" | "exercise";
  content?: string;
  language?: string;
  quiz?: QuizQuestion;
  variant?: "tip" | "warning" | "info";
  exercise?: CodingExercise;
}

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  sections: LessonSection[];
  free?: boolean;
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  category: string;
  price: number;
  lessons: Lesson[];
}

export const ALL_ACCESS_PRICE = 149;

import { introToAI } from "./courses/intro-to-ai";
import { buildingWithAI } from "./courses/building-with-ai";

export const courses: Course[] = [
  introToAI,
  buildingWithAI,
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getLesson(
  courseSlug: string,
  lessonSlug: string
): { course: Course; lesson: Lesson; lessonIndex: number } | undefined {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  const lessonIndex = course.lessons.findIndex((l) => l.slug === lessonSlug);
  if (lessonIndex === -1) return undefined;
  return { course, lesson: course.lessons[lessonIndex], lessonIndex };
}
