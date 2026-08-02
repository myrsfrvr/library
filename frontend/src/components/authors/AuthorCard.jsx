function AuthorCard({ author }) {
  return (
    <div className="author__card">
      <img src={`/img/authors/${author.image}`} alt={author.name} />

      <div className="overlay">{author.name}</div>
    </div>
  );
}

export default AuthorCard;
