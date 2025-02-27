import * as yup from 'yup';

export const gameSchema = yup.object({
  title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
  thumbnail: yup.string().url('Must be a valid URL').required('Thumbnail URL is required'),
  status: yup.string().oneOf(['live', 'upcoming'], 'Pick Status').required('Status is required'),
  shortDescription: yup.string().required('Short description is required'),
  detailDescription: yup.string().required('Detail description is required'),
  releaseDate: yup.date().required('Release date is required').typeError('Invalid date format'),
});
