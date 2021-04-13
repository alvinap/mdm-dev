# MDM - DEV

## Setup Project

Run the following command to run setup project.

```bash
cp .env.example .env
adonis key:generate
npm install
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seeders

Run the following command to run startup seeders.

```js
adonis seed --files StaffSeeder.js
adonis seed --files PositionSeeder.js
adonis seed --files CompanySeeder.js
adonis seed --files MenuNameSeeder.js
adonis seed --files SubMenuNameSeeder.js
adonis seed --files RoleMenuSeeder.js
```

### Run Server

Run local development server

```js
adonis serve --dev
```