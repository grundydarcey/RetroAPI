module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DB_URL || '
  postgres://ncptmxdenhqoyf:deed7d9a49533e3f62c10daa3df1d1b2fd24eeb753cb94f2a397a615ff19e741@ec2-52-7-115-250.compute-1.amazonaws.com:5432/dfb22loru6ore2',
  TEST_DATABASE_URL: process.env.TEST_DB_URL || 'postgresql://dunder_mifflin:thinkful2020@localhost/retrotest',
};