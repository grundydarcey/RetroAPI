module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'production',
  DATABASE_URL: process.env.DB_URL || 'postgresql://dunder_mifflin:thinkful2020@localhost/retro',
  TEST_DATABASE_URL: process.env.TEST_DB_URL || 'postgresql://dunder_mifflin:thinkful2020@localhost/retrotest',
};