# Local fonts

This directory contains the web-ready variable font files loaded by
`src/app/[locale]/layout.tsx` through `next/font/local`.

- `satoshi-variable.woff2`: Satoshi, normal, weights 300–900
- `satoshi-variable-italic.woff2`: Satoshi, italic, weights 300–900

Satoshi was designed by Deni Anggara and distributed by Indian Type Foundry
through [Fontshare](https://www.fontshare.com/fonts/satoshi).

Only the WOFF2 variable files are kept in the application because they cover
all required weights with substantially less repository and transfer overhead
than shipping separate OTF, TTF, EOT, WOFF, and static-weight copies.
