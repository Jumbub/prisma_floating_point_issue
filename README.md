```
pnpm install
pnpm dev
```

Example output:
```
{ number: 0.10739236971565864, processedNumber: 0.10739236971565864 }
{
  id: 6,
  single: 0.1073923697156586,
  obj: { number: 0.1073923697156586 },
  arr: [ { number: 0.1073923697156586 } ]
}
[
  {
    id: 6,
    single: 0.1073923697156586,
    obj: { number: 0.1073923697156586 },
    arr: [ [Object] ]
  }
]
```

Did not expect difference when comparing a local value to a value retrieved from Prisma. (`0.10739236971565864 !== 0.1073923697156586`)
