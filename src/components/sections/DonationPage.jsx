export default function DonationPage({
  donationMethod,
  nairaAmount,
  donationEmail,
  donationFeedback,
  fundSent,
  dollarSent,
  setNairaAmount,
  setDonationEmail,
  setCurrentPage,
  handleSelectMethod,
  handlePaystackDonation,
  setDollarSent,
  setDonationFeedback,
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 md:px-6 py-24 scroll-mt-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Donation Page
            </span>
            <h1 className="mt-3 text-4xl font-display font-bold">
              Support youth with a secure gift.
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Choose Naira or Dollar, then complete the donation flow below.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage("home")}
            className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-muted transition-smooth"
          >
            Back to home
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">
                Choose your donation currency
              </h2>
              <p className="text-muted-foreground">
                Select Naira for Paystack checkout, or select Dollar to see bank
                transfer details.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => handleSelectMethod("naira")}
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${donationMethod === "naira" ? "border-primary bg-primary/10 text-primary" : "border-border bg-muted text-foreground"}`}
              >
                Naira
              </button>
              <button
                type="button"
                onClick={() => handleSelectMethod("dollar")}
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${donationMethod === "dollar" ? "border-primary bg-primary/10 text-primary" : "border-border bg-muted text-foreground"}`}
              >
                Dollar
              </button>
            </div>

            {donationMethod === "naira" && (
              <div className="mt-8 rounded-3xl border border-border bg-muted/50 p-6">
                <h3 className="text-lg font-semibold">Pay with Paystack</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enter your email and amount, then click the Paystack button to
                  complete payment.
                </p>
                <div className="mt-6 grid gap-4">
                  <label className="block text-sm font-medium">
                    Amount (NGN)
                    <input
                      type="number"
                      value={nairaAmount}
                      onChange={(e) => setNairaAmount(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="e.g. 5000"
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Email
                    <input
                      type="email"
                      value={donationEmail}
                      onChange={(e) => setDonationEmail(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="your@email.com"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={handlePaystackDonation}
                    className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-smooth"
                  >
                    Pay with Paystack
                  </button>
                  {donationFeedback && (
                    <p className="text-sm text-foreground/90 mt-3">
                      {donationFeedback}
                    </p>
                  )}
                  {fundSent && (
                    <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800">
                      Thank you for your donation! Your payment was successful.
                    </div>
                  )}
                </div>
              </div>
            )}

            {donationMethod === "dollar" && (
              <div className="mt-8 rounded-3xl border border-border bg-muted/50 p-6">
                <h3 className="text-lg font-semibold">
                  Dollar transfer details
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Send funds to the account below, then tap the button once your
                  transfer is complete.
                </p>
                <div className="mt-5 space-y-4 rounded-3xl bg-white p-5 border border-border text-sm">
                  <div>
                    <p className="font-semibold">Bank Name</p>
                    <p>Global Bank Nigeria</p>
                  </div>
                  <div>
                    <p className="font-semibold">Account Name</p>
                    <p>Expertise Hub Foundation</p>
                  </div>
                  <div>
                    <p className="font-semibold">Account Number</p>
                    <p>1234567890</p>
                  </div>
                  <div>
                    <p className="font-semibold">SWIFT Code</p>
                    <p>GBNKNG123</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setDollarSent(true);
                    setDonationFeedback("Thanks for your donation!");
                  }}
                  className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition-smooth"
                >
                  Fund Sent
                </button>
                {dollarSent && (
                  <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800">
                    Thanks for your donation! We’ve received your confirmation.
                  </div>
                )}
              </div>
            )}

            {!donationMethod && (
              <p className="mt-8 text-sm text-muted-foreground">
                Choose a currency first to continue.
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-border bg-muted/40 p-8 shadow-soft">
            <h3 className="text-xl font-semibold">Donation instructions</h3>
            <p className="mt-4 text-muted-foreground">
              Your gift helps train youth in digital skills, entrepreneurship,
              mentorship, and community outreach across Northern Nigeria.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="rounded-2xl bg-white p-4 border border-border">
                <strong className="font-semibold">Naira:</strong> uses Paystack
                secure checkout for instant payment.
              </li>
              <li className="rounded-2xl bg-white p-4 border border-border">
                <strong className="font-semibold">Dollar:</strong> send a bank
                transfer, then confirm with the Fund Sent button.
              </li>
              <li className="rounded-2xl bg-white p-4 border border-border">
                <strong className="font-semibold">Receipt:</strong> use the
                reference provided by Paystack for Naira gifts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
