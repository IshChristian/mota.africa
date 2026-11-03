// Page translation: English (default, written in index.html) and Kinyarwanda.
//
// How it works: every visible English string on the page (text, aria-label, alt, placeholder, title)
// is looked up in RW below and swapped when Kinyarwanda is selected. Keys are the English text with
// spaces collapsed, so editing English copy in index.html means updating the matching key here.
// main.js translates the text it renders itself with MOTA_I18N.t().
//
// Language choice: a saved choice wins; otherwise Kinyarwanda if the browser lists it, else English.
//
// TODO: every Kinyarwanda string below needs review by a native speaker before launch.
(function () {
  'use strict';

  const RW = {
    // Page, menu and language switch
    'MOTA — The smarter way to ride and earn': 'MOTA — Uburyo bworoshye bwo kugenda no gukorera amafaranga',
    'Skip to content': 'Jya ku bikubiyemo',
    'MOTA home': 'Ahabanza ha MOTA',
    'Open navigation': 'Fungura menu',
    'Close navigation': 'Funga menu',
    'Close': 'Funga',
    'Ride': 'Genda',
    'Drive': 'Twara',
    'Explore MOTA': 'Menya MOTA',
    'About us': 'Abo turi bo',
    'Our purpose': 'Intego yacu',
    'Journey checklist': 'Ibyo kugenzura mbere y\'urugendo',
    'Support': 'Ubufasha',
    'Questions': 'Ibibazo',
    'Download': 'Kuramo',

    // Hero
    'MOTA / YOUR EVERYDAY MOBILITY': 'MOTA / INGENDO ZAWE ZA BURI MUNSI',
    'Your city.': 'Umujyi wawe.',
    'Your ride.': 'Urugendo rwawe.',
    'Your next move.': 'Intambwe ikurikira.',
    'From a moto across town to a car for your day. Move with MOTA, or get ready to drive.': 'Kuva kuri moto ikwambutsa umujyi kugeza ku modoka y\'umunsi wawe. Genda na MOTA, cyangwa witegure gutwara.',
    'Explore riding': 'Menya uko ugenda',
    'Become a driver': 'Ba umushoferi',
    'Car & moto': 'Imodoka na moto',
    'Free rider registration': 'Abagenzi biyandikisha ku buntu',
    'Illustration of motorcycle taxis on a Kigali boulevard': 'Ishusho ya moto zitwara abagenzi ku muhanda wa Kigali',
    'MOTA concept imagery': 'Ishusho y\'igitekerezo cya MOTA',
    'FIND YOUR WAY': 'HITAMO INZIRA YAWE',
    'What fits your journey?': 'Ni iki gikwiranye n\'urugendo rwawe?',
    'Explore ride categories': 'Reba ubwoko bw\'ingendo',
    'Two wheels': 'Inziga ebyiri',
    'Car': 'Imodoka',
    'Four wheels': 'Inziga enye',
    'Explore a motorcycle ride for your everyday journey.': 'Menya urugendo kuri moto ku ngendo zawe za buri munsi.',
    'Explore a car ride for your everyday journey.': 'Menya urugendo mu modoka ku ngendo zawe za buri munsi.',
    'See how it works': 'Reba uko bikora',
    'A guide to MOTA. Availability is shown in the app.': 'Ubuyobozi bwa MOTA. Aho serivisi iboneka bigaragara muri porogaramu.',

    // Services
    'A LITTLE MORE MOTA': 'MENYA MOTA BIRUSHIJEHO',
    'One app.': 'Porogaramu imwe.',
    'Different ways forward.': 'Inzira zitandukanye zigana imbere.',
    'Start with a journey. Get to know the tools that help riders and drivers along the way.': 'Tangirira ku rugendo. Menya ibikoresho bifasha abagenzi n\'abashoferi mu nzira.',
    '01 / RIDE': '01 / GENDA',
    'Where are': 'Ugiye',
    'you heading?': 'he?',
    'Explore car and moto journeys, from your pickup to your destination.': 'Menya ingendo z\'imodoka na moto, kuva aho bagufatira kugeza aho ujya.',
    'Pickup': 'Aho bagufatira',
    'Your destination': 'Aho ujya',
    'Meet your next ride': 'Menya urugendo rwawe rukurikira',
    '02 / DRIVE': '02 / TWARA',
    'Your experience.': 'Ubunararibonye bwawe.',
    'A new chapter.': 'Intangiriro nshya.',
    'Prepare your account, verify your documents and get ready for the road.': 'Tegura konti yawe, wemeze ibyangombwa byawe kandi witegure umuhanda.',
    'Get ready to drive': 'Itegure gutwara',
    '03 / DRIVER WALLET': '03 / IKOFI Y\'UMUSHOFERI',
    'Keep your earnings': 'Kurikirana',
    'in view.': 'ayo winjiza.',
    'Deposits, withdrawal requests and transaction history, together.': 'Kubitsa, gusaba kubikuza n\'amateka y\'ibikorwa, byose hamwe.',
    'Explore your wallet': 'Reba ikofi yawe',
    '04 / SUPPORT': '04 / UBUFASHA',
    'A clearer': 'Intambwe',
    'next step.': 'ikurikira isobanutse.',
    'Find guidance for verification, your account and trip details.': 'Bona ubuyobozi ku igenzura, konti yawe n\'amakuru y\'urugendo.',
    'Find your guidance': 'Bona ubuyobozi',

    // Product
    'The app that moves you forward': 'Porogaramu igutera imbere',
    'MEET MOTA': 'MENYA MOTA',
    'YOUR CITY.': 'UMUJYI WAWE.',
    'YOUR NEXT MOVE.': 'INTAMBWE IKURIKIRA.',
    'One app for riders.': 'Porogaramu imwe y\'abagenzi.',
    'One connected workspace for drivers.': 'Aho abashoferi bakorera hahujwe.',
    'Choose your ride': 'Hitamo urugendo rwawe',
    'Live updates': 'Amakuru ako kanya',
    'Follow trip progress': 'Kurikirana urugendo',
    'Wallet': 'Ikofi',
    'Manage your money': 'Cunga amafaranga yawe',
    'Verification': 'Igenzura',
    'Complete your account': 'Uzuza konti yawe',
    'Explore MOTA →': 'Menya MOTA →',
    'Your next ride, connected': 'Urugendo rwawe rukurikira, ruhujwe',
    'From pickup to destination': 'Kuva aho bagufatira kugeza aho ujya',
    'Good morning': 'Mwaramutse',
    'Where are you going?': 'Ugiye he?',
    '⌖ Enter destination': '⌖ Andika aho ujya',
    'Find a ride →': 'Shaka urugendo →',
    'Illustrative app preview': 'Ishusho y\'urugero rwa porogaramu',

    // Network map
    'Your journey, connected': 'Urugendo rwawe, ruhujwe',
    'From your pickup to your destination.': 'Kuva aho bagufatira kugeza aho ujya.',
    'MOTA keeps the important details together.': 'MOTA ibika amakuru y\'ingenzi hamwe.',
    'Rider view': 'Uko umugenzi abibona',
    'Driver view': 'Uko umushoferi abibona',
    'Illustrative Kigali journey map': 'Ikarita y\'urugero y\'urugendo i Kigali',
    'Choose your pickup': 'Hitamo aho bagufatira',
    'Set your destination and request a car or moto.': 'Shyiraho aho ujya hanyuma usabe imodoka cyangwa moto.',
    'Review your ride request': 'Reba urugendo wasabwe',
    'See pickup and destination details in your driver account.': 'Reba aho bafatira n\'aho bajya muri konti yawe y\'umushoferi.',
    'Illustrative map · service availability is shown in the app': 'Ikarita y\'urugero · aho serivisi iboneka bigaragara muri porogaramu',

    // Feature cards
    'Designed for everyday journeys': 'Yakozwe ku ngendo za buri munsi',
    'A few simple steps. Everything you need along the way.': 'Intambwe nke zoroshye. Ibyo ukeneye byose mu nzira.',
    'Your pickup → destination': 'Aho bagufatira → aho ujya',
    'Choose your destination': 'Hitamo aho ujya',
    'Set your pickup and tell MOTA where you want to go.': 'Shyiraho aho bagufatira ubwire MOTA aho ushaka kujya.',
    'Find the right ride': 'Bona urugendo rukubereye',
    'Select a car or moto, with your choice clearly shown.': 'Hitamo imodoka cyangwa moto, amahitamo yawe akagaragara neza.',
    'Trip in progress': 'Urugendo rurakomeje',
    'Your journey, in one place': 'Urugendo rwawe, ahantu hamwe',
    'Follow your trip': 'Kurikirana urugendo rwawe',
    'See trip progress and essential details from the app.': 'Reba aho urugendo rugeze n\'amakuru y\'ingenzi muri porogaramu.',
    'MOTA WALLET': 'IKOFI YA MOTA',
    'Your balance': 'Amafaranga ufite',
    'Deposit ↙ Withdraw': 'Kubitsa ↙ Kubikuza',
    'Manage your earnings': 'Cunga ayo winjiza',
    'Drivers can review wallet activity and request withdrawals.': 'Abashoferi bashobora kureba ibikorwa by\'ikofi no gusaba kubikuza.',
    'Previous journey cards': 'Amakarita y\'urugendo abanza',
    'Next journey cards': 'Amakarita y\'urugendo akurikira',

    // Journey demo
    'THE MOTA WAY': 'UBURYO BWA MOTA',
    'A little less effort.': 'Imbaraga nke.',
    'A lot more movement.': 'Ingendo nyinshi.',
    'Explore a journey, from the first tap to your destination.': 'Menya urugendo, kuva ukanze bwa mbere kugeza ugeze aho ujya.',
    'Explore the stages of a MOTA journey': 'Menya ibyiciro by\'urugendo rwa MOTA',
    'Make your next move': 'Tera intambwe ikurikira',
    'Set your pickup and destination.': 'Shyiraho aho bagufatira n\'aho ujya.',
    'Car or moto. The choice is yours.': 'Imodoka cyangwa moto. Ni wowe uhitamo.',
    'Stay connected': 'Komeza uhuze',
    'Follow the details of your trip.': 'Kurikirana amakuru y\'urugendo rwawe.',
    'MOTA EXPERIENCE': 'UBUNARARIBONYE BWA MOTA',
    'YOUR JOURNEY STARTS HERE': 'URUGENDO RWAWE RUTANGIRIRA HANO',
    'Where to next?': 'Ugiye he ubu?',
    'Choose your pickup and enter your destination. Keep the important details in one place.': 'Hitamo aho bagufatira wandike aho ujya. Bika amakuru y\'ingenzi ahantu hamwe.',
    'A RIDE THAT FITS YOUR DAY': 'URUGENDO RUKWIRANYE N\'UMUNSI WAWE',
    'Car or moto?': 'Imodoka cyangwa moto?',
    'Choose the category that works for you. Your selection stays clearly visible before you request a ride.': 'Hitamo icyiciro kikubereye. Amahitamo yawe aguma agaragara neza mbere yo gusaba urugendo.',
    'CONNECTED ALONG THE WAY': 'MUHUJWE MU NZIRA',
    'Follow your journey.': 'Kurikirana urugendo rwawe.',
    'Keep your pickup, destination, and trip updates close as your journey progresses.': 'Gumana aho bagufatiye, aho ujya n\'amakuru y\'urugendo uko urugendo rukomeza.',
    'Start with MOTA': 'Tangira na MOTA',
    'Interactive guide · not a live ride request': 'Ubuyobozi bw\'urugero · si ugusaba urugendo nyakuri',

    // Driver / rider registration
    'YOUR ACCOUNT. YOUR NEXT STEP.': 'KONTI YAWE. INTAMBWE YAWE IKURIKIRA.',
    'Start your next chapter': 'Tangira intangiriro nshya',
    'with MOTA': 'na MOTA',
    'Bring your driving experience. We’ll help you prepare your account.': 'Zana ubunararibonye bwawe mu gutwara. Tuzagufasha gutegura konti yawe.',
    'How it works →': 'Uko bikora →',
    'Choose your account': 'Hitamo konti yawe',
    'Driver': 'Umushoferi',
    'Rider': 'Umugenzi',
    'DRIVER REGISTRATION': 'KWIYANDIKISHA K\'UMUSHOFERI',
    'RIDER REGISTRATION': 'KWIYANDIKISHA K\'UMUGENZI',
    'Free': 'Ubuntu',
    'Registration fee for a driver account.': 'Amafaranga yo kwiyandikisha kuri konti y\'umushoferi.',
    'No registration fee for riders.': 'Abagenzi ntibishyura kwiyandikisha.',
    'Register your account': 'Fungura konti yawe',
    'Verify your phone number': 'Emeza nimero ya telefoni yawe',
    'Submit personal & vehicle documents': 'Ohereza ibyangombwa byawe n\'iby\'ikinyabiziga',
    'Complete payment and account review': 'Rangiza kwishyura no gusuzuma konti',
    'Prepare your documents': 'Tegura ibyangombwa byawe',
    'Keep clear, readable copies ready. Complete the fields and expiry dates requested in the app.': 'Tegura kopi zisobanutse kandi zisomeka. Uzuza ibisabwa n\'amatariki y\'irangira muri porogaramu.',
    'National ID or passport and identity photos': 'Indangamuntu cyangwa pasiporo n\'amafoto y\'irangamuntu',
    'A current selfie': 'Ifoto yawe y\'ubu (selfie)',
    'Driving licence and vehicle documents': 'Uruhushya rwo gutwara n\'ibyangombwa by\'ikinyabiziga',
    'Vocational card, if provided': 'Ikarita y\'umwuga, niba uyifite',
    'Start as a driver →': 'Tangira nk\'umushoferi →',
    'Start as a rider →': 'Tangira nk\'umugenzi →',
    'Email verification is optional. Your account shows any steps still to complete.': 'Kwemeza imeyili si itegeko. Konti yawe igaragaza intambwe zisigaye.',
    'Your next journey starts here.': 'Urugendo rwawe rukurikira rutangirira hano.',
    'Create your rider account and complete your personal verification. Riders pay no registration fee.': 'Fungura konti yawe y\'umugenzi kandi urangize igenzura ry\'umwirondoro wawe. Abagenzi ntibishyura kwiyandikisha.',
    'Register your rider account': 'Fungura konti yawe y\'umugenzi',
    'Submit your personal identity documents': 'Ohereza ibyangombwa by\'irangamuntu yawe',
    'Complete verification to continue to your home screen': 'Rangiza igenzura kugira ngo ukomeze ku ipaji yawe y\'ibanze',
    'Personal details requested in the app': 'Umwirondoro usabwa muri porogaramu',
    'Start your next chapter with MOTA.': 'Tangira intangiriro nshya na MOTA.',
    'Bring your driving experience. Prepare your personal and vehicle documents to complete your account.': 'Zana ubunararibonye bwawe mu gutwara. Tegura ibyangombwa byawe n\'iby\'ikinyabiziga kugira ngo urangize konti yawe.',
    'Register your driver account': 'Fungura konti yawe y\'umushoferi',
    'Submit personal and vehicle documents': 'Ohereza ibyangombwa byawe n\'iby\'ikinyabiziga',
    'Pay the registration fee and complete verification': 'Ishyura amafaranga yo kwiyandikisha urangize igenzura',
    'Valid driving licence': 'Uruhushya rwo gutwara rukiri rwemewe',
    'Vehicle registration, insurance and technical inspection documents': 'Icyangombwa cy\'iyandikwa ry\'ikinyabiziga, ubwishingizi n\'icyemezo cy\'isuzuma rya tekiniki',
    'Document expiry dates requested in the app': 'Amatariki y\'irangira ry\'ibyangombwa asabwa muri porogaramu',

    // Wallet
    'BUILT FOR THE DRIVER': 'YAKOREWE UMUSHOFERI',
    'Your hard work.': 'Umuhate wawe.',
    'Your money.': 'Amafaranga yawe.',
    'Give your earnings a home. See wallet activity, add funds, and follow withdrawal requests from your driver account.': 'Ha ayo winjiza aho abikwa. Reba ibikorwa by\'ikofi, ongeramo amafaranga, kandi ukurikirane ibyo wasabye kubikuza muri konti yawe y\'umushoferi.',
    'Explore driver wallet actions': 'Reba ibikorwa by\'ikofi y\'umushoferi',
    'Activity': 'Ibikorwa',
    'Deposit': 'Kubitsa',
    'Withdraw': 'Kubikuza',
    'See your wallet transactions and their status in one place.': 'Reba ibikorwa by\'ikofi yawe n\'aho bigeze ahantu hamwe.',
    'Join as a driver': 'Injira nk\'umushoferi',
    'MOTA DRIVER WALLET': 'IKOFI Y\'UMUSHOFERI WA MOTA',
    'Every transaction.': 'Igikorwa cyose.',
    'A clearer picture.': 'Ishusho isobanutse.',
    'Add funds to your wallet': 'Ongera amafaranga mu ikofi yawe',
    'Withdrawal request': 'Gusaba kubikuza',
    'Follow the review and payout status': 'Kurikirana isuzuma n\'iyishyurwa',
    'Track': 'Kurikirana',
    'Transaction history': 'Amateka y\'ibikorwa',
    'Keep your activity together': 'Bika ibikorwa byawe hamwe',
    'Review': 'Suzuma',
    'Clear information, at every step.': 'Amakuru asobanutse, kuri buri ntambwe.',
    'Illustrative wallet guide': 'Urugero rw\'ikofi',
    'Add funds.': 'Ongeramo amafaranga.',
    'Keep moving.': 'Komeza ugende.',
    'Start a deposit in your driver wallet and follow its transaction status.': 'Tangira kubitsa mu ikofi yawe y\'umushoferi kandi ukurikirane aho bigeze.',
    'Open your wallet': 'Fungura ikofi yawe',
    'Choose the deposit option': 'Hitamo kubitsa',
    'Start': 'Tangira',
    'Enter deposit details': 'Andika amakuru yo kubitsa',
    'Provide the amount and payment details': 'Andika amafaranga n\'uburyo bwo kwishyura',
    'Details': 'Amakuru',
    'Check the status': 'Reba aho bigeze',
    'Review the transaction in your wallet': 'Suzuma igikorwa mu ikofi yawe',
    'Your earnings.': 'Ayo winjiza.',
    'Your next step.': 'Intambwe yawe ikurikira.',
    'Submit a withdrawal request and track its review and payout status in your account.': 'Saba kubikuza kandi ukurikirane isuzuma n\'iyishyurwa muri konti yawe.',
    'Request a withdrawal': 'Saba kubikuza',
    'Choose an amount from your wallet': 'Hitamo amafaranga mu ikofi yawe',
    'Request': 'Saba',
    'Follow the review': 'Kurikirana isuzuma',
    'Check updates on your request': 'Reba amakuru ku cyo wasabye',
    'Status': 'Aho bigeze',
    'Track the payout': 'Kurikirana iyishyurwa',
    'Timing depends on the payment provider': 'Igihe biterwa n\'utanga serivisi yo kwishyura',
    'Payout': 'Iyishyurwa',

    // Support
    'Support that keeps': 'Ubufasha butuma',
    'you moving': 'ukomeza kugenda',
    'Help with your account': 'Ubufasha kuri konti yawe',
    'Find verification and profile settings inside MOTA.': 'Bona igenzura n\'igenamiterere ry\'umwirondoro muri MOTA.',
    'Track requests and updates': 'Kurikirana ibyo wasabye n\'amakuru mashya',
    'Check trip details and wallet transaction statuses.': 'Reba amakuru y\'urugendo n\'aho ibikorwa by\'ikofi bigeze.',
    'Travel with confidence': 'Genda ufite icyizere',
    'Keep your emergency contact and safety details current.': 'Komeza kuvugurura uwo guhamagara mu byihutirwa n\'amakuru y\'umutekano.',
    'Account & verification': 'Konti n\'igenzura',
    'Phone verification, personal information and documents.': 'Kwemeza telefoni, umwirondoro n\'ibyangombwa.',
    'View guidance →': 'Reba ubuyobozi →',
    'Driver wallet': 'Ikofi y\'umushoferi',
    'Deposit, withdraw and follow the status of your requests.': 'Bitsa, bikuza kandi ukurikirane aho ibyo wasabye bigeze.',
    'Trip support': 'Ubufasha ku rugendo',
    'Ride details, feedback and support in the MOTA app.': 'Amakuru y\'urugendo, ibitekerezo n\'ubufasha muri porogaramu ya MOTA.',
    'Safety details': 'Amakuru y\'umutekano',
    'Manage emergency contacts and essential account settings.': 'Cunga abo guhamagara mu byihutirwa n\'igenamiterere ry\'ingenzi rya konti.',
    'Real journeys. Clear information.': 'Ingendo nyazo. Amakuru asobanutse.',
    '“Know where you’re going.”': '“Menya aho ujya.”',
    'Pickup and destination': 'Aho bagufatira n\'aho ujya',
    '“See what happens next.”': '“Reba ibikurikiraho.”',
    'Trip progress': 'Aho urugendo rugeze',
    '“Stay in control of your account.”': '“Genzura konti yawe.”',
    'Verification and profile': 'Igenzura n\'umwirondoro',
    '“Keep your earnings organized.”': '“Tunganya ayo winjiza.”',
    'MOTA product principles': 'Amahame ya MOTA',

    // Technology
    'Built to keep': 'Yubakiwe gutuma',
    'every journey moving': 'buri rugendo rukomeza',
    'Ride requests, trip updates and account tools work together in one connected experience.': 'Gusaba urugendo, amakuru y\'urugendo n\'ibikoresho bya konti bikorana mu buryo bumwe buhujwe.',
    'Riders': 'Abagenzi',
    'Drivers': 'Abashoferi',
    'Operations': 'Ibikorwa',
    'Explore MOTA technology →': 'Menya ikoranabuhanga rya MOTA →',
    'MOTA is building': 'MOTA irubaka',
    'more than a way to book rides…': 'ibirenze uburyo bwo gusaba ingendo…',
    'Illustration of a connected African mobility community': 'Ishusho y\'umuryango nyafurika w\'ingendo uhujwe',
    'Everyday mobility': 'Ingendo za buri munsi',
    'Connected opportunities': 'Amahirwe ahujwe',
    'A local perspective': 'Imyumvire y\'iwacu',
    'One app': 'Porogaramu imwe',
    'A shared journey': 'Urugendo dusangiye',

    // Trust checklist
    'PEOPLE AT THE CENTRE': 'ABANTU MBERE',
    'A better journey': 'Urugendo rwiza',
    'starts with': 'rutangirana',
    'clear information.': 'n\'amakuru asobanutse.',
    'MOTA brings your account, journey details and next steps into one place. Take a moment to prepare before you head out.': 'MOTA ihuriza hamwe konti yawe, amakuru y\'urugendo n\'intambwe zikurikira. Fata akanya witegure mbere yo kugenda.',
    'Explore support': 'Reba ubufasha',
    'YOUR JOURNEY CHECKLIST': 'IBYO KUGENZURA MBERE Y\'URUGENDO',
    'Get your account ready': 'Tegura konti yawe',
    'Verify your phone and complete the required identity documents. Email verification is optional.': 'Emeza telefoni yawe kandi wuzuze ibyangombwa by\'irangamuntu bisabwa. Kwemeza imeyili si itegeko.',
    'Check the trip details': 'Genzura amakuru y\'urugendo',
    'Confirm your pickup, destination and vehicle category in the app before requesting your ride.': 'Emeza aho bagufatira, aho ujya n\'ubwoko bw\'ikinyabiziga muri porogaramu mbere yo gusaba urugendo.',
    'Keep your details current': 'Komeza kuvugurura amakuru yawe',
    'Review your profile and emergency contact. Drivers should also keep vehicle documents and expiry dates current.': 'Suzuma umwirondoro wawe n\'uwo guhamagara mu byihutirwa. Abashoferi kandi bagomba kuvugurura ibyangombwa by\'ikinyabiziga n\'amatariki y\'irangira.',
    'Know your next step': 'Menya intambwe ikurikira',
    'Check account guidance and the status of your requests. Use the support options available in MOTA.': 'Reba ubuyobozi bwa konti n\'aho ibyo wasabye bigeze. Koresha uburyo bw\'ubufasha buri muri MOTA.',
    'For an emergency, contact local emergency services.': 'Mu gihe cy\'ibyihutirwa, hamagara serivisi z\'ubutabazi zo hafi.',

    // Community
    'ONE CITY. MANY POSSIBILITIES.': 'UMUJYI UMWE. AMAHIRWE MENSHI.',
    'Different journeys.': 'Ingendo zitandukanye.',
    'The same way forward.': 'Inzira imwe igana imbere.',
    'For the early start, the daily commute, and the road home.': 'Ku rugendo rwa mu gitondo, urwa buri munsi, n\'urwo gutaha.',
    '01 / FOR RIDERS': '01 / KU BAGENZI',
    'Go where': 'Jya aho',
    'life takes you.': 'ubuzima bukujyana.',
    'Choose a car or moto for your everyday journeys.': 'Hitamo imodoka cyangwa moto ku ngendo zawe za buri munsi.',
    'Create your rider account': 'Fungura konti yawe y\'umugenzi',
    '02 / FOR DRIVERS': '02 / KU BASHOFERI',
    'Turn your next': 'Hindura intambwe yawe',
    'move into possibility.': 'ikurikira amahirwe.',
    'Bring your experience. Get your account ready for the road.': 'Zana ubunararibonye bwawe. Tegura konti yawe ujye mu muhanda.',
    'Explore the driver experience': 'Menya uko abashoferi bakora',

    // Guides
    'Tools and guidance': 'Ibikoresho n\'ubuyobozi',
    'for the road ahead': 'by\'urugendo ruri imbere',
    'Get to know the MOTA experience.': 'Menya ubunararibonye bwa MOTA.',
    'Your first journey with MOTA': 'Urugendo rwawe rwa mbere na MOTA',
    'Choose a ride and follow the steps from pickup to destination.': 'Hitamo urugendo ukurikize intambwe kuva aho bagufatira kugeza aho ujya.',
    'Explore rider tools →': 'Reba ibikoresho by\'umugenzi →',
    'MOTA DRIVER': 'UMUSHOFERI WA MOTA',
    'Your account': 'Konti yawe',
    'Documents · profile · wallet': 'Ibyangombwa · umwirondoro · ikofi',
    'Complete your driver account': 'Rangiza konti yawe y\'umushoferi',
    'Prepare your personal and vehicle documents for verification.': 'Tegura ibyangombwa byawe n\'iby\'ikinyabiziga kugira ngo bigenzurwe.',
    'View verification guidance →': 'Reba ubuyobozi bw\'igenzura →',
    'Keep trip details close': 'Gumana amakuru y\'urugendo hafi',
    'Pickup, destination and journey updates in one place.': 'Aho bagufatira, aho ujya n\'amakuru y\'urugendo ahantu hamwe.',
    'See the experience →': 'Reba uko bikora →',
    'MOTA support': 'Ubufasha bwa MOTA',
    'Help along the way': 'Ubufasha mu nzira',
    'Find help when you need it': 'Bona ubufasha igihe ubukeneye',
    'Use the app to access account, wallet and trip support.': 'Koresha porogaramu ubone ubufasha kuri konti, ikofi n\'urugendo.',
    'Explore support →': 'Reba ubufasha →',
    'Previous MOTA guides': 'Ubuyobozi bwa MOTA bubanza',
    'Next MOTA guides': 'Ubuyobozi bwa MOTA bukurikira',

    // FAQ
    'LET’S MAKE IT CLEAR': 'REKA TUBISOBANURE',
    'Good to know': 'Ibyo wamenya',
    'before you go.': 'mbere yo kugenda.',
    'Find your next step, whether you’re riding or driving.': 'Bona intambwe yawe ikurikira, waba ugenda cyangwa utwara.',
    'Choose a question category': 'Hitamo icyiciro cy\'ibibazo',
    'All questions': 'Ibibazo byose',
    'For riders': 'Ku bagenzi',
    'For drivers': 'Ku bashoferi',
    'Search questions': 'Shakisha ibibazo',
    'Try documents or registration': 'Gerageza "ibyangombwa" cyangwa "kwiyandikisha"',
    '{n} question': 'Ikibazo {n}',
    '{n} questions': 'Ibibazo {n}',
    'How do I get started with MOTA?': 'Natangira nte gukoresha MOTA?',
    'Register, verify your phone and complete the personal documents requested in the app. Drivers also complete vehicle verification, registration payment and account review. Email verification is optional.': 'Iyandikishe, wemeze telefoni yawe kandi wuzuze ibyangombwa bisabwa muri porogaramu. Abashoferi kandi barangiza igenzura ry\'ikinyabiziga, kwishyura amafaranga yo kwiyandikisha n\'isuzuma rya konti. Kwemeza imeyili si itegeko.',
    'Do riders pay a registration fee?': 'Abagenzi bishyura amafaranga yo kwiyandikisha?',
    'No. Riders do not pay a registration fee. The driver registration fee is 5,000 RWF.': 'Oya. Abagenzi ntibishyura kwiyandikisha. Amafaranga yo kwiyandikisha ku mushoferi ni 5,000 RWF.',
    'Which documents do drivers need?': 'Ni ibihe byangombwa abashoferi bakenera?',
    'Personal identity documents and a selfie, driving licence, transport permit, insurance, vehicle registration and technical inspection. The driver vocational card is optional. Use the app to see the full requirements and document expiry dates.': 'Ibyangombwa by\'irangamuntu n\'ifoto yawe (selfie), uruhushya rwo gutwara, uruhushya rwo gutwara abantu, ubwishingizi, icyangombwa cy\'iyandikwa ry\'ikinyabiziga n\'isuzuma rya tekiniki. Ikarita y\'umwuga si itegeko. Reba muri porogaramu ibisabwa byose n\'amatariki y\'irangira.',
    'How do driver withdrawals work?': 'Kubikuza ku bashoferi bikora gute?',
    'Submit a withdrawal request from your driver wallet. Requests stay queued until queued payouts meet the provider minimum of 10,000 RWF. Track the payout status in your account; timing depends on the payment provider.': 'Saba kubikuza uhereye mu ikofi yawe y\'umushoferi. Ibisabwa bitegereza kugeza igiteranyo cyabyo kigeze ku 10,000 RWF, umubare muto usabwa n\'utanga serivisi yo kwishyura. Kurikirana aho iyishyurwa rigeze muri konti yawe; igihe biterwa n\'utanga serivisi yo kwishyura.',
    'What should I prepare before uploading documents?': 'Ni iki nategura mbere yo kohereza ibyangombwa?',
    'Use clear, readable files, including both sides of your identity document where requested. Follow the size and format guidance in the app. Check that each upload is confirmed before submitting your verification.': 'Koresha amadosiye asobanutse kandi asomeka, harimo impande zombi z\'indangamuntu aho bisabwa. Kurikiza amabwiriza y\'ingano n\'imiterere ari muri porogaramu. Reba ko buri dosiye yoherejwe yemejwe mbere yo gutanga igenzura.',
    'Where can I download MOTA?': 'Nakura he MOTA?',
    'Use the release links in the download section below. If a link is marked pending, the official release URL has not been added yet.': 'Koresha imiyoboro iri mu gice cyo kuramo hepfo. Niba umuyoboro wanditseho ko utaraboneka, ntiwarashyirwaho.',
    'Check release links →': 'Reba imiyoboro yo kuramo →',
    'No matching questions. Try another word or choose all questions.': 'Nta kibazo gihuye. Gerageza irindi jambo cyangwa uhitemo ibibazo byose.',

    // Download section
    'Your next move': 'Intambwe yawe ikurikira',
    'starts here.': 'itangirira hano.',
    'One app for riders and drivers. Choose your device below.': 'Porogaramu imwe y\'abagenzi n\'abashoferi. Hitamo telefoni yawe hepfo.',
    'The Android app is ready to download. The iPhone version is coming soon.': 'Porogaramu ya Android iteguye kuramwa. Iya iPhone iraza vuba.',
    'The iPhone app is ready to download. The Android version is coming soon.': 'Porogaramu ya iPhone iteguye kuramwa. Iya Android iraza vuba.',
    'Android and iPhone downloads are available below.': 'Iya Android n\'iya iPhone ziraboneka hepfo.',
    'Official download links are being prepared. Please check back soon.': 'Imiyoboro yemewe yo kuramo iri gutegurwa. Uzagaruke vuba.',
    'Download APK': 'Kuramo APK',
    'Version 1.0.0 · 130 MB · Android 7 or newer': 'Verisiyo 1.0.0 · 130 MB · Android 7 cyangwa iyisumbuye',
    'Get for iPhone': 'Iya iPhone',
    'Coming soon': 'Iraza vuba',
    'Official iPhone release': 'Iya iPhone yemewe',
    'The file is 130 MB. Use Wi-Fi if you can.': 'Dosiye ingana na 130 MB. Koresha Wi-Fi niba bishoboka.',
    '01 / BEFORE YOU INSTALL': '01 / MBERE YO KUYISHYIRAHO',
    'Why Android shows a warning': 'Impamvu Android igaragaza umuburo',
    'MOTA is installed from this website, not the Play Store. Android shows an “unknown apps” warning for every app installed this way. It is a standard message, not a sign that something is wrong. You allow it once, for your browser only.': 'MOTA ishyirwa muri telefoni ivuye kuri uru rubuga, si kuri Play Store. Android igaragaza umuburo wa “unknown apps” kuri porogaramu zose zishyirwamo muri ubu buryo. Ni ubutumwa busanzwe, ntibisobanuye ko hari ikibazo. Ubyemera rimwe gusa, kuri mushakisha (browser) yawe.',
    '02 / INSTALL IN 4 STEPS': '02 / YISHYIREHO MU NTAMBWE 4',
    'From download to sign-up': 'Kuva ku kuramo kugeza ku kwiyandikisha',
    'Tap Download APK. If Chrome warns about the file, tap “Download anyway”.': 'Kanda “Kuramo APK”. Niba Chrome iguhaye umuburo kuri dosiye, kanda “Download anyway”.',
    'Open the file from your notifications or the Downloads folder.': 'Fungura dosiye mu matangazo (notifications) cyangwa mu bubiko bwa Downloads.',
    'When Android asks, tap Settings and turn on “Allow from this source”.': 'Android nibikubaza, kanda Settings ufungure “Allow from this source”.',
    'Tap Install, then open MOTA and sign up with your phone number.': 'Kanda Install, hanyuma ufungure MOTA wiyandikishe ukoresheje nimero ya telefoni yawe.',
    '03 / CHECK THE FILE': '03 / GENZURA DOSIYE',
    'Make sure it’s the real MOTA': 'Menya neza ko ari MOTA nyakuri',
    'Version': 'Verisiyo',
    'Package': 'Paki (package)',
    'SHA-256 checksum': 'Checksum ya SHA-256',
    'Copy': 'Koporora',
    'Checksum copied.': 'Checksum yakopowe.',
    'Compare this code with the downloaded file using a checksum app. If it doesn’t match, don’t install it.': 'Gereranya iyi kode na dosiye wakuyemo ukoresheje porogaramu ya checksum. Niba bidahuye, ntuyishyireho.',
    'Your download has started. When it finishes, open it from your notifications or the Downloads folder.': 'Gukuramo byatangiye. Nibirangira, yifungure mu matangazo (notifications) cyangwa mu bubiko bwa Downloads.',
    'The Android download link is not available yet. Please check back soon.': 'Umuyoboro wo kuramo iya Android ntuboneka. Uzagaruke vuba.',
    'The iPhone version is not available yet. Please check back soon.': 'Iya iPhone ntiraboneka. Uzagaruke vuba.',

    // Footer
    'PRODUCT': 'SERIVISI',
    'MOTA experience': 'Ubunararibonye bwa MOTA',
    'COMPANY': 'IKIGO',
    'Technology': 'Ikoranabuhanga',
    'Our network': 'Aho dukorera',
    'GET HELP': 'BONA UBUFASHA',
    'MOTA Digital. All rights reserved.': 'MOTA Digital. Uburenganzira bwose burubahirizwa.',
    '● Back to top ↑': '● Subira hejuru ↑',
  };

  // Text that main.js renders itself (it translates those with t()), so the page walker leaves it alone.
  const SKIP = '#vehicle-copy, #map-title, #map-description, #demo-eyebrow, #demo-title, #demo-description, .demo-count, #join-title, #join-intro, #join-kicker, #join-fee, #join-description, #join-steps, #join-documents, #join-cta, #wallet-title, #wallet-description, #wallet-rows, #faq-count, #release-status, .toast, .lang-switch, script, style, code';
  const ATTRS = ['aria-label', 'alt', 'placeholder', 'title'];
  const STORE_KEY = 'mota-lang';
  const HINT_KEY = 'mota-lang-hint-seen';
  const norm = text => text.replace(/\s+/g, ' ').trim();
  const textOriginals = new WeakMap();
  const attrOriginals = new WeakMap();
  const listeners = [];
  const originalTitle = document.title;
  let lang = 'en';

  const storage = {
    get(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch (e) {} },
  };

  function t(text) {
    if (lang !== 'rw') return text;
    const hit = RW[norm(text)];
    return hit === undefined ? text : hit;
  }

  function translateNode(node) {
    let original = textOriginals.get(node);
    if (original === undefined) { original = node.nodeValue; textOriginals.set(node, original); }
    const hit = lang === 'rw' ? RW[norm(original)] : undefined;
    node.nodeValue = hit === undefined ? original : original.match(/^\s*/)[0] + hit + original.match(/\s*$/)[0];
  }

  function translateAttrs(element) {
    let originals = attrOriginals.get(element);
    if (!originals) {
      originals = {};
      ATTRS.forEach(name => { if (element.hasAttribute(name)) originals[name] = element.getAttribute(name); });
      attrOriginals.set(element, originals);
    }
    Object.keys(originals).forEach(name => element.setAttribute(name, t(originals[name])));
  }

  function apply(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: node => (!node.nodeValue.trim() || node.parentElement?.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    for (let node = walker.nextNode(); node; node = walker.nextNode()) translateNode(node);
    root.querySelectorAll(ATTRS.map(a => `[${a}]`).join(',')).forEach(element => { if (!element.closest(SKIP)) translateAttrs(element); });
    document.title = t(originalTitle);
  }

  function detect() {
    // A shared link like ?lang=rw opens in that language (handy for WhatsApp messages and flyers).
    let fromUrl = null;
    try { fromUrl = new URLSearchParams(window.location.search).get('lang'); } catch (e) {}
    if (fromUrl === 'en' || fromUrl === 'rw') return fromUrl;
    const saved = storage.get(STORE_KEY);
    if (saved === 'en' || saved === 'rw') return saved;
    const preferred = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    return preferred.some(code => /^rw\b/i.test(code || '')) ? 'rw' : 'en';
  }

  const hint = document.querySelector('.lang-hint');
  function hideHint() { if (hint) hint.hidden = true; storage.set(HINT_KEY, '1'); }

  function setLang(next, { save = false } = {}) {
    lang = next === 'rw' ? 'rw' : 'en';
    document.documentElement.lang = lang;
    apply(document.body);
    document.querySelectorAll('.lang-switch [data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    if (save) { storage.set(STORE_KEY, lang); hideHint(); }
    listeners.forEach(fn => fn(lang));
  }

  document.querySelectorAll('.lang-switch [data-lang]').forEach(button => button.addEventListener('click', () => setLang(button.dataset.lang, { save: true })));

  setLang(detect());

  // First visit: point to the other language, written in that language, so anyone can find it.
  if (hint && !storage.get(STORE_KEY) && !storage.get(HINT_KEY)) {
    const other = lang === 'rw' ? 'en' : 'rw';
    const action = hint.querySelector('[data-lang-hint]');
    action.textContent = other === 'rw' ? 'Urashaka Ikinyarwanda? Kanda hano.' : 'Prefer English? Tap here.';
    action.setAttribute('lang', other);
    action.addEventListener('click', () => setLang(other, { save: true }));
    hint.querySelector('.lang-hint-close').addEventListener('click', hideHint);
    hint.hidden = false;
    setTimeout(() => { if (!hint.hidden) hint.hidden = true; }, 15000);
  }

  window.MOTA_I18N = {
    t,
    setLang,
    get lang() { return lang; },
    onChange(fn) { listeners.push(fn); },
    missing() { // Developer aid: MOTA_I18N.missing() lists page text with no Kinyarwanda yet.
      const out = new Set();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const text = norm(textOriginals.get(node) ?? node.nodeValue);
        if (/[a-z]{2}/i.test(text) && !node.parentElement?.closest(SKIP) && RW[text] === undefined) out.add(text);
      }
      return [...out];
    },
  };
})();
