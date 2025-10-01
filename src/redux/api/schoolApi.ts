import { baseApi } from './baseApi';

export const schoolApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get school statistics
    getSchoolStats: build.query({
      query: () => ({
        url: '/school/stats',
        method: 'GET',
      }),
      providesTags: ['School'],
    }),

    // Get school features
    getSchoolFeatures: build.query({
      query: () => ({
        url: '/school/features',
        method: 'GET',
      }),
      providesTags: ['School'],
    }),

    // Get school facilities
    getSchoolFacilities: build.query({
      query: () => ({
        url: '/school/facilities',
        method: 'GET',
      }),
      providesTags: ['Facilities'],
    }),

    // Update school stats
    updateSchoolStats: build.mutation({
      query: (data) => ({
        url: '/school/stats',
        method: 'PATCH',
        data,
      }),
      invalidatesTags: ['School'],
    }),
  }),
});

export const {
  useGetSchoolStatsQuery,
  useGetSchoolFeaturesQuery,
  useGetSchoolFacilitiesQuery,
  useUpdateSchoolStatsMutation,
} = schoolApi;