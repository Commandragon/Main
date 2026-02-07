// Cookie consent: streamlined flow with clear accept/decline handling
(function cookieConsentGeoFlow() {
  // Disable cookie UI across the site (false = banner and nags are suppressed)
  const COOKIE_UI_ENABLED = false;
  // Local storage keys for tracking user consent and declines
  const KEY_ACCEPTED = 'cc_accepted_v1';
  const KEY_DECLINED_COUNT = 'cc_declined_count_v1';
  const KEY_PREFS = 'cc_prefs_v1';

  // A list of messages to gently remind the user to enable location services
const nags = [
  "📍 Location needed to match you with verified local singles — without your city we can’t show active profiles in your neighborhood or guarantee in-person meetups.",
  "🔞 We can’t display nearby adult-oriented events unless we know your region; enabling location unlocks curated local listings for singles in your area.",
  "📚 To pair you with a senior study buddy who tutors locally, we need your approximate location so we can check nearby availability and scheduling windows.",
  "🚗 Limited warranty alerts for cars in your county require location to match VINs to local dealers and verify eligibility for recall refunds.",
  "💸 A contact claims to have a transfer for you (requires local bank matching) — we need your region to pre-validate routing and help avoid delays.",
  "🎓 Local tutors offering first-lesson discounts will only appear if we know your city so we can route requests to people who can actually meet you.",
  "🏝 Last-minute getaway deals and flash hotel discounts are geo-limited — enable location so we can check availability at nearby hotels and save you money.",
  "💊 Some wellness pop-ups deliver regionally only; we need location to confirm local shipping lanes and legal availability before showing offers.",
  "🔋 Exclusive local electronics refurb drops require location to confirm pickup points — we can’t reserve anything without your area.",
  "🔞 Hot seniors and mature singles nearby are shown only to local users; allow location to view who’s active in your zip code tonight.",
  "💌 Someone flagged your profile as a high-priority lead — to deliver a personalized intro from a nearby contact we need your town.",
  "📦 Same-day student supplies (pencil enlargers, ruler extenders, extra pens) are stocked at nearby stores; location lets us hold one for you.",
  "🛠 Local handyman promos for dorm furniture assembly are limited to neighborhoods — allow location so we can offer available times.",
  "🎯 Regional job postings and contract tutoring offers rely on local eligibility checks — we need location to show you the ones you qualify for.",
  "📱 Free phone giveaways are region-locked; sharing location lets us confirm winners in your area and reserve your redemption slot.",
  "💬 Neighborhood meetups (book clubs, study sessions, senior socials) are curated by proximity. Enable location to join the most relevant groups.",
  "🔍 We verify local scholarship fairs and in-person study groups via your city; without location we can’t connect you with nearby mentors.",
  "💸 A purported investment contact wants to match you with a local broker — we use location to ensure the person can meet in your region.",
  "📖 Rare textbook rentals and local swap meets are only shown to people in the same city so pickups are practical — allow location to view listings.",
  "🔔 We can send urgent neighborhood alerts and local discounts only if we know your area — location lets us match you with same-city deals.",
  "💼 Nearby career fairs and alumni panels are region-specific; enabling location puts you on the RSVP list for events close to you.",
  "🔞 Local late-night singles and themed meetups are geo-fenced — share your location to see who’s RSVP’d near you this weekend.",
  "🛍 Limited regional coupons for student cafés require location to verify participating stores; allow to claim the local discount.",
  "💊 Free trial health packages can only be shipped to eligible states — we need location to confirm whether you qualify.",
  "🏈 Local sports watch parties and seniors’ socials are only visible to users in the same metro area; turn location on to find them.",
  "💬 A friendly neighbor reportedly has spare study materials — we use your location to route the pickup address and confirm availability.",
  "🚗 Theft-protection and recall offers for your car are tied to your region; location helps us check records and contact local dealerships.",
  "💸 Bitcoin “faucet” offers and local crypto meetups are region-restricted; enabling location allows us to filter legitimate local events.",
  "📦 Nearby flash sales on furniture and big racks are held in-store; we need location to reserve a showroom pickup for you.",
  "📚 Senior mentor hours — retired professors offering short sessions in your city — require location to schedule an in-person meet.",
  "🔞 Evening events for mature singles and cougars are geo-targeted; allow location if you want local match suggestions and RSVP options.",
  "🎁 Local redemption offers (prize draws, coupon codes) require region matching to validate winners — we can’t show them without your city.",
  "📝 Localized essay clinics and emergency tutoring lanes depend on tutor proximity; location tells us who’s available on short notice.",
  "💊 Some supplements are restricted by local law; we check your region to avoid showing offers that can’t ship to you.",
  "🔧 Nearby repair and assembly crews for campus furniture are booked by area — enable location to see available time slots.",
  "📢 Community alerts about senior study circles and book clubs are sent regionally; share location to get precise invites.",
  "💼 Local internship matches are only available per city — enabling location opens opportunities that actually involve commuting.",
  "🔞 A premium profile flagged as nearby will only appear if we know your area; allow location to be shown to that user and vice versa.",
  "🍕 Late-night pizza discounts for students are distributed through nearby vendors — location turns those coupons on for you.",
  "📦 Exclusive ‘local-only’ textbook deep-discounts are unlocked when we confirm you’re in the same delivery zone.",
  "💌 A supposedly generous contact asked us to confirm someone in your area — we need your location to connect you for pickup.",
  "🔞 Mature singles and senior socials are RSVP’d by city; without location you won’t see who’s organizing events nearby.",
  "🧭 Local volunteer and mentorship programs for students rely on location to match you to nearby opportunities.",
  "🔍 Fraud-prevention: some high-value offers require local identity validation to prevent scams — we use location as part of that check.",
  "🎓 Senior study buddy matches are prioritized by walking distance — allow location to pair you with someone you can meet on short notice.",
  "💬 Local ‘flash study’ sessions are formed by neighborhood; location helps us notify you when one starts in your block.",
  "🚗 Limited-time vehicle rebates are region-specific; we check local eligibility before showing offers to avoid disappointment.",
  "🔞 Nearby singles promos and senior socials use location to ensure any meetup suggestions are practical and safe for both parties.",
  "💸 The so-called foreign benefactor mentioned a local bank transfer — we use location to pre-screen and flag suspicious matches.",
  "📦 Furniture showroom discounts and “big rack” clearances are store-specific; enable location if you want us to reserve one for pickup.",
  "🔞 Couples and seniors’ mixer invitations rely on neighborhood routing — without location, RSVP options are blocked.",
  "📈 Local startup pitch nights often include crypto panels; enabling location ensures you’ll get invites that are actually relevant.",
  "🧾 Limited regional warranty checks and class-action notices are triggered by your county — we need location to check eligibility.",
  "🔞 Dating events for older adults (‘hot seniors’) are posted regionally to prevent long-distance no-shows — share location to join.",
  "📚 Textbook drops and secondhand markets happen at campus hubs; location tells us which hub is nearest to you.",
  "💊 Clinical trial flyers and one-day wellness booths are scheduled by city; allow location so we can show those nearby opportunities.",
  "🔍 Local identity verification can speed up prize redemptions and avoid fake winner notifications — location helps with that.",
  "📆 Nearby senior seminars and student-coach hours are posted by neighborhood; sharing your area lets you subscribe to the right calendar.",
  "💸 Crypto meetups and local investment clubs screen for proximity to ensure in-person attendance — location gets you access.",
  "🛒 Local-only retail drops (including novelty ‘meat racks’ displays at furniture stores) require your area to reserve pickup.",
  "🔞 Hot singles, classy seniors, and mature meetups are only promoted to users who opt into local matching — enable location to opt in.",
  "📚 We can match you with a retired tutor in your zip code for same-day sessions — we need location to check their commute radius.",
  "🏥 Nearby dental promos and limited health clinics require region confirmation to display appointments and providers.",
  "🔧 Campus move-in help and furniture assembly promos are offered by local teams; location helps us book them for your address.",
  "🎤 Local karaoke nights and seniors’ open mic nights are geo-fenced; allow location so you’ll see the best local listings.",
  "📦 We can only ship some premium trial items (tech, supplements) to certain counties; enabling location confirms shipping eligibility.",
  "🔞 Regional late-night match suggestions rely on proximity; share location if you want practical meetup suggestions tonight.",
  "🎓 Local academic workshops and thesis-review hours are limited by campus region; location helps us direct you to the right campus event.",
  "💬 Nearby ‘study buddy’ boards let seniors and students coordinate times; location is required to bridge local schedules.",
  "🧾 Warranty and recall lookups for devices and vehicles are regional; we check your area to show any active claims available to you.",
  "🔞 Match notifications for older-adult socials and curated events require area consent so we can filter by neighborhood.",
  "📦 Some ‘instant pickup’ furniture offers are only active if you’re within a short distance of the store — enable location to reserve.",
  "⚠️ Fraud note: some too-good-to-be-true offers are regionally screened — location allows us to flag suspiciously remote redemptions.",
  "🎯 Local coupon drops, from pizza to textbooks, are timed per city; share location so we can ping you exactly when something appears.",
  "🔞 Local events and mixers for mature singles are curated to avoid long-distance matches; location ensures sensible pairings.",
  "📚 Senior volunteer tutors prefer nearby students; enabling location helps us suggest committed local mentors you can meet in person.",
  "💸 Local prize draws and dealership rebates require city-level validation; we need location to register you for those offers.",
  "📍 Final nudge: we can’t show the curated local list — hot seniors, manthers, and furniture-showroom favorites — until you allow location.",
    "📍 Location required to match you with vetted mature singles in your neighborhood — we only show profiles that can realistically meet within a reasonable commute.",
  "🔔 Exclusive invite: an intimate dinner for distinguished singles is being organized nearby; enable location so we can reserve a seat and send exact venue details.",
  "📨 A local benefactor expressed interest in introducing mature companions in your area; we need your city to coordinate a discreet introduction.",
  "🏡 Neighborhood socials for retired professionals are limited by capacity — share location to join the RSVP list for events near you.",
  "🎩 Private invites to curated senior mixers are geo-gated to avoid long-distance no-shows; allow location to receive one-time VIP access.",
  "📦 Complimentary welcome gift for local matches is reserved per zip code — we need your area to hold one for you at the closest pickup point.",
  "🕰 Limited local one-on-one mentorship-and-mingle sessions with retired academics — location helps us pair you with nearby availability.",
  "🔍 We verify in-person meetup safety by checking local attendance zones; enable location so we can suggest matches who are realistically nearby.",
  "🎟 Early access to mature singles’ weekly brunch in your metro area — location is required to claim a limited seat.",
  "💬 A nearby member requested a private intro; we need your approximate location to suggest a convenient meeting spot and time.",
  "🛋 Local showroom speed-dates (cozy, small-group events) are reserved for participants within the same region — allow location to join.",
  "📚 Senior study-and-social groups meet at community centers by neighborhood; enable location to see groups forming near you.",
  "💌 A discreet companionship concierge is matching locals this week — location lets us route introductions to those who can attend in person.",
  "🍷 Region-specific wine-and-conversation nights for mature singles require area confirmation — share location to receive your invite code.",
  "🚗 Complimentary local transportation vouchers for first meetups are available in select cities; allow location so we can check eligibility.",
  "🏆 Local membership perks (discounts, concierge access) are issued per region — enable location to unlock them for mature matches nearby.",
  "🖋 A local retired professional offered limited mentoring dates tied to neighborhood proximity; we need your location to confirm the appointment.",
  "🔔 Nearby ‘coffee with a curator’ meetups for older singles are geo-targeted — share your city to be alerted when spots open up.",
  "📆 Limited local dining vouchers for senior mixers are distributed by metro area; location is required to reserve yours before they run out.",
  "💼 Nearby alumni mixers with mature members are RSVP-only and location-limited — allow location to get on the guest list.",
  "📍 We can’t show private garden-party invites for mature singles unless we know your approximate neighborhood for seating and catering.",
  "📝 Local verified profiles get priority at in-person events; enabling location lets us give you preferential match placement in your area.",
  "🎁 A regional partner is offering curated welcome boxes for local matches — share location so we can set aside yours for pickup.",
  "🔍 For safety, some in-person introductions are limited to users within the same county — enable location so we can present realistic nearby options.",
  "🍽 Dinner club invitations for refined seniors are limited by city; turn on location to receive the exact venue and RSVP link.",
  "📦 Certain concierge-arranged meetups include local perks (transport, venue credit) that require region matching to allocate — allow location to qualify.",
  "🏛 A curated tour for mature singles at a nearby museum is open only to local members — location lets us reserve a spot and handle logistics.",
  "💬 A neighbor has requested local companionship recommendations — share location so we can propose matches who can actually meet up.",
  "🏠 Community social hours and senior lounges list attendance by neighborhood; enabling location helps us show the closest options.",
  "🕯 An intimate, adults-only recital is accepting a small number of local guests; location is needed to finalize seating and send directions.",
  "🎖 Local veteran meet-and-greets for mature singles prioritize nearby attendees — allow location to be considered for invites and seat allocation.",
  "🗺 We tailor recommendations to your immediate area so meetups are practical; enable location to see the most relevant mature matches.",
  "🔐 Private introductions with locally-based vetted companions require area confirmation to proceed with background checks and scheduling.",
  "📚 Senior reading circles and companion meetups are organized by neighborhood — share location to see groups forming this week.",
  "🍸 A nearby cocktail evening for mature singles is offering limited spots tied to city availability — enable location to request an invite.",
  "🧾 Region-specific complimentary consultations with companionship concierges are available — location confirms whether there’s local capacity.",
  "🚪 Local doors-open events for older adults are happening this weekend; turn on location so we can reserve a small number of walk-in seats.",
  "📣 A local member reported a nearby interest in meeting up — we’ll only suggest people who can reasonably travel to your neighborhood; location makes that possible."
];



  /**
   * Selects a random nag message from the list.
   * @returns {string} A random nag message.
   */
  function randNag() {
    return nags[Math.floor(Math.random() * nags.length)];
  }

  /**
   * Checks if the user has already accepted the terms.
   * @returns {boolean} True if accepted, otherwise false.
   */
  function isAccepted() {
    return !!localStorage.getItem(KEY_ACCEPTED);
  }

  /**
   * Retrieves the number of times the user has declined.
   * @returns {number} The total count of declines.
   */
  function getDeclines() {
    return parseInt(localStorage.getItem(KEY_DECLINED_COUNT) || '0', 10);
  }

  /**
   * Increments the decline counter in local storage.
   * @returns {number} The new decline count.
   */
  function addDecline() {
    const n = Math.min(getDeclines() + 1, 99);
    localStorage.setItem(KEY_DECLINED_COUNT, String(n));
    return n;
  }

  /**
   * Marks the user as having accepted and stores their preferences.
   * This also removes the decline counter.
   * @param {object} [prefs={}] - The user's preferences to save.
   */
  function setAccepted(prefs = {}) {
    localStorage.setItem(KEY_ACCEPTED, '1');
    localStorage.setItem(KEY_PREFS, JSON.stringify(prefs));
    localStorage.removeItem(KEY_DECLINED_COUNT);
    hideBanner();
  }

  /**
   * Hides the main cookie consent banner from view.
   */
  function hideBanner() {
    const el = document.getElementById('cookie-consent');
    if (el) {
      el.classList.remove('visible');
      el.style.display = 'none';
    }
  }

  /**
   * Shows the main cookie consent banner.
   */
  function showBanner() {
    const el = document.getElementById('cookie-consent');
    if (el) {
      el.style.display = '';
      el.classList.add('visible');
    }
  }

  /**
   * Requests geolocation permission from the user once.
   * @param {function} onSuccess - Callback for successful permission grant.
   * @param {function} onError - Callback for permission denial or error.
   */
  function requestGeolocationOnce(onSuccess, onError) {
    if (!navigator.geolocation) {
      if (onError) onError(new Error('Geolocation not supported'));
      return;
    }
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (onSuccess) onSuccess(position);
        },
        (err) => {
          if (onError) onError(err);
        }, {
          timeout: 10000
        }
      );
    } catch (e) {
      if (onError) onError(e);
    }
  }

  /**
   * Handles the flow after a user clicks "Accept" on the cookie dialog.
   * It prompts for location and has a retry mechanism if denied once.
   */
  function acceptThenPromptLocation() {
    requestGeolocationOnce(
      () => {
        // Geolocation was successful
        setAccepted({
          location: true
        });
      },
      () => {
        // Geolocation was denied the first time, offer one chance to reconsider
        const retry = confirm("Location was denied. Are you sure you don't want to enable local features? (OK = Try again, Cancel = Continue without)");
        if (retry) {
          requestGeolocationOnce(
            () => {
              setAccepted({
                location: true
              });
            },
            () => {
              // Denied for the second time
              addDecline();
              hideBanner();
            }
          );
        } else {
          // User chose not to retry
          addDecline();
          hideBanner();
        }
      }
    );
  }

  /**
   * Attaches event listeners to the accept and decline buttons in the cookie dialog.
   */
  function wireCookieDialog() {
    const banner = document.getElementById('cookie-consent');
    if (!banner) return;

    const acceptBtn = banner.querySelector('#cc-accept');
    const declineBtn = banner.querySelector('#cc-decline');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', (e) => {
        e.preventDefault();
        acceptThenPromptLocation();
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addDecline();
        hideBanner();
      });
    }
  }

  /**
   * Shows a lightweight nag prompt for subsequent visits and handles the response.
   */
  function showNagThenMaybePrompt() {
    const tryNow = confirm(randNag() + "\n\n(OK = Enable location, Cancel = Not now)");
    if (!tryNow) {
      addDecline(); // User refused the nag, increment decline count
      return;
    }

    // User chose to try enabling location
    requestGeolocationOnce(
      () => {
        // Geolocation was successful
        setAccepted({
          location: true
        });
      },
      () => {
        // Geolocation was denied after the nag
        addDecline();
        alert("Location access was denied. You can change this in your browser settings later.");
      }
    );
  }

  /**
   * Initializes the consent flow based on the user's history.
   */
  function init() {
    // Respect global setting to disable the cookie UI
    if (!COOKIE_UI_ENABLED) return;
    // If user has already accepted, do nothing.
    if (isAccepted()) {
      return;
    }
    const declines = getDeclines();
    if (declines >= 1) {
      showNagThenMaybePrompt();
    } else {
      wireCookieDialog();
      showBanner();
    }
  }

  // Run consent initialization after DOM ready (keeps original behavior)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // defer showing banner until after paint to avoid visual jank
    setTimeout(init, 0);
  }
})();

	// --- CLOAKING/IFRAME SCRIPT ---
	var clickCount = 0;
	window.openB = function() {
		clickCount++;
		if (clickCount >= 1) { 
			var defaultUrl = "/MENUAIUOFHUAFEIHIUFHIDHIHGAIOHGOAIHG/index.html";
			var userInput = prompt(
				"Choose an option:\n" +
				"1 - Default\n" +
				"2 - Garbanzo\n" +
				"3 - Google Drive\n" +
				"4 - Gmail\n" +
				"5 - Infinite Campus" +
				"\n6 - Docs\n\n(Enter the number of your choice)"
			);
			var options = {
				'1': {name: "Home", iconPath: "img/classes.png"},
				'2': {name: "Garbanzo", iconPath: "img/garbonzo.png"},
				'3': {name: "Google Drive", iconPath: "img/gdrive.png"},
				'4': {name: "Gmail", iconPath: "img/gmail.png"},
				'5': {name: "Infinite Campus", iconPath: "img/Infinite.ico"},
				'6': {name: "Google Docs", iconPath: "img/docs.ico"}
			};
			var selectedOption = options[userInput] || options['3'];
			var win = window.open();
			win.document.body.style.margin = '0';
			win.document.body.style.height = '100vh';
			var iframe = win.document.createElement('iframe');
			iframe.style.border = 'none';
			iframe.style.width = '100%';
			iframe.style.height = '100%';
			iframe.style.margin = '0';
			iframe.src = defaultUrl;
			iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-pointer-lock allow-same-origin");
			iframe.setAttribute("allowfullscreen", "");
			iframe.addEventListener('unload', function (event) {
				event.preventDefault();
			});
			win.document.head.innerHTML += '<link rel="shortcut icon" href="' + selectedOption.iconPath + '" type="image/x-icon">';
			win.document.title = selectedOption.name;
			win.document.body.appendChild(iframe);
		}
		if (clickCount >= 6) {
			alert("movie url dont use this it is for educational uses only: https://movie-web-cy.vercel.app");
		}
	};



	// init
	document.addEventListener('DOMContentLoaded', () => {
		applyUserPreferences();
		if (COOKIE_UI_ENABLED && typeof createConsent === 'function') {
			createConsent();
		}
	});

	// Disable context menu etc.
	document.body.addEventListener('contextmenu', function(e) {
		e.preventDefault();
	});
	document.body.addEventListener('dragstart', function(e) {
		e.preventDefault();
	});
	document.body.addEventListener('selectstart', function(e) {
		e.preventDefault();
	});