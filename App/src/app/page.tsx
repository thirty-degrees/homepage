export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="pt-8 pl-8">
        <h1 className="text-4xl font-bold mb-2">Thirty Degrees</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">An overview of apps developed by Damian and Robin</p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Party Battle
          </h2>

          <div className="space-y-4">
            <div className="flex gap-2 justify-start">
              <div>
              <a
                href="https://play.google.com/store/apps/details?id=ch.thirty_degrees.party_battle"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity duration-200 flex-1"
              >
                <img
                  src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                  alt="Get it on Google Play"
                  className="w-full h-12 object-contain"
                />
              </a>
              </div>
              <div>
              <a
                href="https://apps.apple.com/us/app/party-battle/id6751968403"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity duration-200 flex-1"
              >
                <img
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  className="w-full h-12 object-contain"
                />
              </a>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <a
                href="https://party-battle.thirty-degrees.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-3 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Webapp
              </a>

              <a
                href="https://github.com/thirty-degrees/party-battle"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-3 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a
                href="/privacy"
                className="block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-3 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}