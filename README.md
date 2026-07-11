# Free Fire UID API

A simple Vercel Serverless API to get Free Fire player information using UID.

## Deploy

1. Upload this project to GitHub.
2. Import the repository into Vercel.
3. Click Deploy.

## API

```
GET /?uid=123456789
```

Example:

```
https://your-project.vercel.app/?uid=123456789
```

Response:

```json
{
  "status": true,
  "uid": "123456789",
  "name": "PLAYER NAME"
}
```

## Project Structure

```
.
├── api/
│   └── uid.js
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

Developer: SGX TOPUP
