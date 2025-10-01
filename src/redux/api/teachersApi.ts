import { baseApi } from './baseApi';

export const teachersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all teachers
    getTeachers: build.query({
      query: () => ({
        url: '/teachers',
        method: 'GET',
      }),
      providesTags: ['Teachers'],
    }),

    // Get featured teachers
    getFeaturedTeachers: build.query({
      query: () => ({
        url: '/teachers/featured',
        method: 'GET',
      }),
      providesTags: ['Teachers'],
    }),

    // Get teacher by ID
    getTeacherById: build.query({
      query: (id: string) => ({
        url: `/teachers/${id}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Teachers'}],
    }),

    // Add new teacher
    addTeacher: build.mutation({
      query: (data) => ({
        url: '/teachers',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Teachers'],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetFeaturedTeachersQuery,
  useGetTeacherByIdQuery,
  useAddTeacherMutation,
} = teachersApi;
