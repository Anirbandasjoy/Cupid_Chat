export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-0  text-white">
      <div className="text-center space-y-6">
        {/* Decorative Icon */}
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl font-extrabold text-white">😢</span>
          </div>
        </div>
        {/* Error Message */}
        <h1 className="text-7xl font-extrabold tracking-wide">404</h1>
        <p className="text-xl text-gray-300">
          Oops! We can not find the page you are looking for.
        </p>
        <p className="text-md text-gray-400">
          It might have been removed, renamed, or did not exist in the first
          place.
        </p>

        <div className="mt-8 text-gray-500 text-sm">
          <p>© 2024 AuthNexus. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
