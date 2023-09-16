export default function Heading({ txt }) {
  return (
    <div className="max-w-screen">
      <div className="p-5 bg-teal-950 my-10 rounded-md min-w-min">
        <p className="font-bold capitalize text-slate-300">{txt}</p>
      </div>
    </div>
  );
}
