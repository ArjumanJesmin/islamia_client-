export const tagTypesList = [
  "School",
  "Teachers", 
  "Announcements",
  "Events",
  "Testimonials",
  "Gallery",
  "Facilities",
  "AcademicPrograms"
] as const;

export type TagTypes = typeof tagTypesList[number];