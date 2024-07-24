```
pnpm install
pnpm dev
```

Example output:
```
{ number: 505.68999999999994, processedNumber: 505.68999999999994 }
{
  id: 5,
  single: 505.6899999999999,
  obj: { number: 505.6899999999999 },
  arr: [ { number: 505.6899999999999 } ]
}
[
  {
    id: 5,
    single: 505.6899999999999,
    obj: { number: 505.6899999999999 },
    arr: [ [Object] ]
  }
]
```

Did not expect difference when comparing a local value to a value retrieved from Prisma. (`505.68999999999994 !== 505.6899999999999`)
