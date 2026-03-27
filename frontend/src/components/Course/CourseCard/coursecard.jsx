import "./coursecard.css";

export default function CourseCard({
  title,
  progress,
  thumbnail,
  onContinue,
}) {
  return (
    <div className="course-card">

      {/* thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="course-thumb"
      />

      <h4>{title}</h4>

      <p>Progress: {progress}%</p>

      <button onClick={onContinue}>
        Continue
      </button>

    </div>
  );
}