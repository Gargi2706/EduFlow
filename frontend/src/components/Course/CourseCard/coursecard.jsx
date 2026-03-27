import "./coursecard.css";

export default function CourseCard({
  title,
  progress,
  thumbnailImg,   // ✅ changed here
  onContinue,
}) {
  return (
    <div className="course-card">

      {/* thumbnail */}
      <img
        src={thumbnailImg}   // ✅ changed here
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