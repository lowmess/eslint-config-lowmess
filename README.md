This is my ESLint config. It is meant to be used with [Prettier](https://github.com/prettier/prettier) and [`prettier-config-lowmess`](https://github.com/lowmess/prettier-config-lowmess). As such, any conflicting stylistic rules have been disabled.

🌮

## Usage in mixed JS & TS environments

Annoyingly, including an override for `.ts` files in the base config means any project that uses it needs to install TypeScript as a dependency. Boo.

```json
{
  "extends": ["lowmess"],
  "overrides": [
    {
      "files": ["**/*.ts?(x)"],
      "extends": ["lowmess/typescript"]
    }
  ]
}
```