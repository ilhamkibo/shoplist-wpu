export default function Item({ params, onDeleteItem, onCheckedItem }) {
  return (
    <li key={params.id}>
      <input
        type="checkbox"
        checked={params.checked}
        onChange={() => onCheckedItem(params.id)}
      />
      <span style={params.checked ? { textDecoration: "Line-through" } : {}}>
        {params.quantity} {params.name}
      </span>
      <button onClick={() => onDeleteItem(params.id)}>&times;</button>
    </li>
  );
}