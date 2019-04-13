export default date => new Date(date).toLocaleString('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
