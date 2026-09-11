import "./Loading.css";
function Loading() {
  return (
    <section className="w-screen h-screen flex justify-center items-center absolute backdrop-blur-2xl z-40">
      <div className="size-15 rounded-full border border-white border-l-sky-700 animate-spin"></div>
    </section>
  );
}
export default Loading;
