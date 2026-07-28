# Serenity Captain Website

This package is ready for GitHub and Firebase Hosting.

## Main updates in this build
- Replaced the cropped circular logo with a clean transparent gold compass rose.
- Improved the mobile header spacing and logo scale.
- Capitalized “Guessing” in the charter heading.
- Added transparent photographic backgrounds inside every charter card while preserving the navy-and-gold text treatment.
- Added Open Graph and Twitter metadata plus a correctly sized 1200×630 social-sharing image.
- Kept the current pricing, booking form, phone number, and email address.

## Firebase deployment
From the project folder, run:

```bash
firebase login
firebase use --add
firebase deploy --only hosting
```

The `firebase.json` file is already configured to host this folder.
