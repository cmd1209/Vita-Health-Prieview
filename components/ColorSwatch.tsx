export default function ColorSwatch({
  name,
  token,
}: {
  name: string;
  token: string;
}) {
  return (
    <div className="color-swatch">
      <div className="color-swatch__sample" style={{ backgroundColor: `var(${token})` }} aria-hidden="true" />
      <div className="color-swatch__meta">
        <span>{name}</span>
        <code>{token}</code>
      </div>
    </div>
  );
}
