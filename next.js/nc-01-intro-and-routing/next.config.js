/** @type {import('next').NextConfig} */
const nextConfig = {
  //? farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clarusway.com",
      },
    ],
  },
};

module.exports = nextConfig;
