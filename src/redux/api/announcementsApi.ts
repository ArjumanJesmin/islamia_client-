import { baseApi } from './baseApi';

export const announcementsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all announcements
    getAnnouncements: build.query({
      query: () => ({
        url: '/announcements',
        method: 'GET',
      }),
      providesTags: ['Announcements'],
    }),

    // Get events
    getEvents: build.query({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
      providesTags: ['Events'],
    }),

    // Add new announcement
    addAnnouncement: build.mutation({
      query: (data:any) => ({
        url: '/announcements',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Announcements'],
    }),

    // Add new event
    addEvent: build.mutation({
      query: (data:any) => ({
        url: '/events',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Events'],
    }),

    // Delete announcement
    deleteAnnouncement: build.mutation({
      query: (id: string) => ({
        url: `/announcements/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Announcements'],
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,
  useGetEventsQuery,
  useAddAnnouncementMutation,
  useAddEventMutation,
  useDeleteAnnouncementMutation,
} = announcementsApi;