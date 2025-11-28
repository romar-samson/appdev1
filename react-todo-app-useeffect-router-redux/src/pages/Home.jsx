function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        Welcome to the Todo App
      </h1>

      <a
        href="/login"
        className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-xl text-lg font-medium shadow-sm hover:bg-primary/90 transition">
        Go to Login
      </a>
    </div>
  );
}

export default Home;
