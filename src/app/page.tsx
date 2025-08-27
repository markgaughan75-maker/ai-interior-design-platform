export default function Page() {
  return (
    <div className="grid gap-4">
      <p>
        Welcome! Explore the three example flows to see how the app is wired.
      </p>
      <ul className="list-disc pl-6">
        <li><a className="underline" href="/enhance">Enhance</a> (image touch-up concept)</li>
        <li><a className="underline" href="/stage">Stage</a> (virtual staging concept)</li>
        <li><a className="underline" href="/design">Design</a> (style exploration concept)</li>
      </ul>
    </div>
  );
}
