import SERVER_URL from '../../config/server';

function AuthorCard({ author }) {
  return (
    <div className="author__card">
      <img
        src={`${SERVER_URL}/img/authors/${author.image}`}
        alt={author.name}
      />

      <div className="overlay">{author.name}</div>
    </div>
  );
}

export default AuthorCard;
