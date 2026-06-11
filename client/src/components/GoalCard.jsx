function GoalCard({ label, checked, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </div>
  );
}

export default GoalCard;