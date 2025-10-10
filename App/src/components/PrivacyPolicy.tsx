export default function PrivacyPolicy() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-4 md:p-6">
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6">
        PRIVACY POLICY
      </h2>
      <div className="text-white text-sm md:text-lg max-w-2xl text-left">
        <p className="mb-3 md:mb-4">
          We respect your privacy and are committed to protecting your personal
          data. This privacy policy explains how we collect, use, and safeguard
          your information.
        </p>
        <p className="mb-3 md:mb-4">
          We only collect information that you voluntarily provide to us and use
          it solely for the purpose of improving our services.
        </p>
        <p>
          For any questions about this privacy policy, please contact us at
          <br />
          <strong>
            <a
              href="mailto:privacy@thirty-degrees.com"
              className="text-white hover:text-gray-300 text-sm md:text-base"
            >
              privacy@thirty-degrees.com
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
}
