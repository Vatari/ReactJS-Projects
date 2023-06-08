const paginate = (followers) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: pages });
};

export default paginate;
