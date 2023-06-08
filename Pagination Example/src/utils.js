const paginate = (followers) => {
  const itemsPerPage = 9;
  const page = Math.ceil(followers.length / itemsPerPage);
};

export default paginate;
