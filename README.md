# Checkforce.js

<p align="center">
  <img src="https://user-images.githubusercontent.com/6599252/154813112-d055ce6e-d896-44b2-b45b-b91e12ca36b7.svg" alt="Checkforce.js logo" width="350" height="180">
</p>

<h3 align="center">Password Strength Checker</h3>

<p align="center">
  A JavaScript library for evaluating password strength and displaying contextual feedback.
</p>

---

## Overview

**Checkforce.js v3** is a JavaScript library that analyzes password strength and displays a contextual feedback popover next to a password input.

The library relies on two external dependencies:

- [Popper.js](https://popper.js.org/) — Positions the password feedback popover.
- [zxcvbn](https://github.com/dropbox/zxcvbn) — Analyzes password strength.

<p align="center">
  <img src="https://user-images.githubusercontent.com/6599252/155199700-b14e751e-5248-48bd-ab33-5cf6397eed94.png" alt="Checkforce.js password strength feedback">
</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Distribution Bundles](#distribution-bundles)
- [Usage](#usage)
- [Popover Placement](#popover-placement)
- [JavaScript Files](#javascript-files)
- [Versioning](#versioning)
- [License](#license)

## Features

- Password strength analysis using zxcvbn.
- Contextual feedback displayed in a popover.
- Configurable popover placement.
- Automatic placement adjustment using the `auto` option.
- Bundled and standalone JavaScript builds.
- Integration with standard HTML password fields.

## Installation

Install the package using npm:

```bash
npm install checkforce.js --save
```

## Distribution Bundles

Checkforce.js provides bundled and standalone JavaScript files.

### Bundled Version

The bundled files include Popper.js and zxcvbn.

Include the development bundle:

```html
<script src="dist/checkforce.bundle.js"></script>
```

Or use the minified bundle:

```html
<script src="dist/checkforce.bundle.min.js"></script>
```

### Standalone Version

The standalone files require Popper.js and zxcvbn to be loaded separately.

```html
<script src="path/to/popper.min.js"></script>
<script src="path/to/zxcvbn.min.js"></script>
<script src="dist/checkforce.min.js"></script>
```

Ensure that the dependency scripts load before Checkforce.js.

## Usage

Add a password input to your HTML form:

```html
<form>
  <label for="input-password">Password</label>
  <input
    type="password"
    id="input-password"
    placeholder="Enter your password"
    autocomplete="new-password"
  >

  <button type="submit">Create Account</button>
</form>

<script src="dist/checkforce.bundle.js"></script>
<script>
  const checkForce = new CheckForce('#input-password');
</script>
```

The default popover placement is above the password input.

## Popover Placement

Checkforce.js supports different popover placement options through the `placement` configuration property.

### Top

The default placement displays the feedback popover above the input.

![Checkforce.js top placement](https://user-images.githubusercontent.com/6599252/155201501-bb6cebf1-1e83-47ac-8ef2-6f39e5050872.png)

```javascript
const checkForce = new CheckForce('#input-password');
```

### Bottom

Display the feedback popover below the input:

```javascript
const checkForce = new CheckForce('#input-password', {
  placement: 'bottom'
});
```

![Checkforce.js bottom placement](https://user-images.githubusercontent.com/6599252/155201842-118cf077-8dce-42d7-9da2-3f425a2e6142.png)

### Left

Display the feedback popover to the left of the input:

```javascript
const checkForce = new CheckForce('#input-password', {
  placement: 'left'
});
```

![Checkforce.js left placement](https://user-images.githubusercontent.com/6599252/155205135-be64ba1d-2305-4ebe-8f26-f39ef4edee56.png)

### Right

Display the feedback popover to the right of the input:

```javascript
const checkForce = new CheckForce('#input-password', {
  placement: 'right'
});
```

![Checkforce.js right placement](https://user-images.githubusercontent.com/6599252/155205524-1e50c328-6ad1-47f5-9321-a06344f59cfd.png)

### Automatic Placement

Use `auto` to allow the popover to adjust its placement according to the available screen space.

```javascript
const checkForce = new CheckForce('#input-password', {
  placement: 'auto'
});
```

![Checkforce.js automatic placement](https://user-images.githubusercontent.com/6599252/155208790-cfecd856-f4e9-4488-a11c-8ac9420ac1f0.gif)

## JavaScript Files

| File | Popper.js Included | zxcvbn Included |
|---|---|---|
| `checkforce.bundle.js` | Yes | Yes |
| `checkforce.bundle.min.js` | Yes | Yes |
| `checkforce.js` | No | No |
| `checkforce.min.js` | No | No |

The standalone files require their dependencies to be loaded separately.

## Security Considerations

- Use HTTPS when delivering password-related pages in production.
- Do not log, store, or transmit plaintext passwords unnecessarily.
- Remember that password strength estimation is a useful security aid, not a substitute for secure password storage, server-side validation, rate limiting, and multifactor authentication.
- Review the library and dependency versions before deploying them in production.

## Versioning

Checkforce.js follows the principles of [Semantic Versioning (SemVer)](https://semver.org/).

Semantic Versioning uses the `MAJOR.MINOR.PATCH` format to communicate changes and compatibility expectations.

Consult the project's release history to determine the version currently available and any migration requirements.

## License

Checkforce.js is distributed under the **MIT License**.

See the repository's `LICENSE` file for the complete license terms.
