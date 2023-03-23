import Styles from "./Form.module.css";

export default function FormCard({
  name,
  email,
  phone,
  hobbies,
  gender,
  file,
}) {
  return (
    <div className={Styles.Card}>
      <h2>{name}</h2>
      <h4>Email: {email}</h4>
      <p>Phone: {phone}</p>
      <p>Gender: {gender}</p>
      <p>
        Hobbies:{" "}
        {hobbies.map((el, i) => (
          <span key={i}>{el},</span>
        ))}
      </p>
      <button>
        <a href={file} target="_blank">
          View Document
        </a>
      </button>
    </div>
  );
}
