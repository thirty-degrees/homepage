export default function Privacy() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">User Data</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              No user data is collected in our apps. For evaluation purposes, only non-user-specific data provided by Google Play and the Apple App Store is used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="text-lg text-gray-600 dark:text-gray-300">
              <p>Robin Nater<br />
              robin.nater@hotmail.com<br />
              Im Obstgarten 20<br />
              9526 Zuckenriet<br />
              Schweiz (CH)</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
