"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AcademyContextType {
  /** Check if user has access to a specific course (or all via all-access) */
  hasCourseAccess: (courseSlug: string) => boolean;
  /** Check if user has the all-access pass */
  hasAllAccess: boolean;
  /** Unlock a single course */
  unlockCourse: (courseSlug: string) => void;
  /** Unlock all courses (all-access pass) */
  unlockAll: () => void;
  /** Lock everything (for testing) */
  lockAll: () => void;
}

const AcademyContext = createContext<AcademyContextType>({
  hasCourseAccess: () => false,
  hasAllAccess: false,
  unlockCourse: () => {},
  unlockAll: () => {},
  lockAll: () => {},
});

const COURSES_KEY = "khalif_courses_access";
const ALL_ACCESS_KEY = "khalif_all_access";
const BYPASS_KEY = "khalif_academy_bypass";

export function AcademyProvider({ children }: { children: ReactNode }) {
  const [unlockedCourses, setUnlockedCourses] = useState<Set<string>>(new Set());
  const [hasAllAccess, setHasAllAccess] = useState(false);

  useEffect(() => {
    // Check for bypass (unlocks everything)
    const bypass = localStorage.getItem(BYPASS_KEY);
    const params = new URLSearchParams(window.location.search);
    const bypassParam = params.get("bypass");

    if (bypass === "khalifbuildsai2026" || bypassParam === "khalifbuildsai2026") {
      if (bypassParam) localStorage.setItem(BYPASS_KEY, "khalifbuildsai2026");
      setHasAllAccess(true);
      return;
    }

    // Check all-access pass
    const allAccess = localStorage.getItem(ALL_ACCESS_KEY);
    if (allAccess === "true") {
      setHasAllAccess(true);
      return;
    }

    // Check individual course access
    const stored = localStorage.getItem(COURSES_KEY);
    if (stored) {
      try {
        const slugs: string[] = JSON.parse(stored);
        setUnlockedCourses(new Set(slugs));
      } catch {
        // ignore invalid data
      }
    }
  }, []);

  const hasCourseAccess = (courseSlug: string) => {
    return hasAllAccess || unlockedCourses.has(courseSlug);
  };

  const unlockCourse = (courseSlug: string) => {
    setUnlockedCourses((prev) => {
      const next = new Set(prev);
      next.add(courseSlug);
      localStorage.setItem(COURSES_KEY, JSON.stringify([...next]));
      return next;
    });
  };

  const unlockAll = () => {
    localStorage.setItem(ALL_ACCESS_KEY, "true");
    setHasAllAccess(true);
  };

  const lockAll = () => {
    localStorage.removeItem(COURSES_KEY);
    localStorage.removeItem(ALL_ACCESS_KEY);
    localStorage.removeItem(BYPASS_KEY);
    setUnlockedCourses(new Set());
    setHasAllAccess(false);
  };

  return (
    <AcademyContext.Provider
      value={{ hasCourseAccess, hasAllAccess, unlockCourse, unlockAll, lockAll }}
    >
      {children}
    </AcademyContext.Provider>
  );
}

export function useAcademy() {
  return useContext(AcademyContext);
}
