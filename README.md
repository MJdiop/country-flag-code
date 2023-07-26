# country-flag-code

A package that transforms a country code into a flag

Install country-flag-code:

```bash
npm i country-flag-code

# or

yarn add country-flag-code
```

Usage:

```ts
import { countryCode } from 'country-flag-code';

function MyComponent() {
  const flag = countryCode('sn');

  return (
    <>
      Country {flag} => '🇸🇳'
    </>
  );
}

```
