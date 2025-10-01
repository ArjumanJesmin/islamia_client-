import { baseApi } from './baseApi';

export const academicsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get academic programs
    getAcademicPrograms: build.query({
      query: () => ({
        url: '/academics/programs',
        method: 'GET',
      }),
      providesTags: ['AcademicPrograms'],
    }),

    // Get program by grade
    getProgramByGrade: build.query({
      query: (grade: string) => ({
        url: `/academics/programs/${grade}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'AcademicPrograms', }],
    }),
  }),
});

export const {
  useGetAcademicProgramsQuery,
  useGetProgramByGradeQuery,
} = academicsApi;