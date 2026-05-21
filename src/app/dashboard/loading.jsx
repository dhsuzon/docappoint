const Loading = () => {
  return (
    <section className="py-12 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-base sm:text-lg text-slate-500 font-medium">
          Loading dashboard...
        </p>
      </div>
    </section>
  );
};

export default Loading;
