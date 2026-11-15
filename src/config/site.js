// PRELAUNCH keeps every page out of Google while the site lives on the
// preview address. Flip to false at DNS cutover. Pages that should never be
// indexed (404, thank-you) pass `noindex` to Base themselves.
export const PRELAUNCH = true;

// From the ABN register (SPICKLE PTY LTD, VIC 3166). Confirmed with Lukey: pending.
export const ABN = '25 663 619 583';
export const SITE = 'https://www.spickle.com.au';

// ServiceM8 hosted booking form (Settings > ServiceM8 Add-ons > Online Booking).
// utm_source tells ServiceM8 the enquiry came from the website.
export const BOOKING_URL =
  'https://book.servicem8.com/request_service_booking?strVendorUUID=d47c6663-2761-478e-b2ae-1f271c627f9b&utm_source=Website';
