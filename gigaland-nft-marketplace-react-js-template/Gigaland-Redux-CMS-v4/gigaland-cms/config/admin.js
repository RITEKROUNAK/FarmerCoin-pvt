module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ed28f620e04b5d03a4689c6ee0457f2'),
  },
});
