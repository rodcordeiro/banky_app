import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://b0ec68c44caab6d95e1be62a4824d1d9@o4506106261602304.ingest.sentry.io/4506106272940032',
  enableInExpoDevelopment: true,
  tracesSampleRate: 1.0, // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring. We recommend adjusting this value in production.
  attachStacktrace: true,
  debug: true,
  enabled: true, // process.env.NODE_ENV !== 'development', // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});
