export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/dashboard',
    '/paket',
    '/paket/:path*',
    '/berita',
    '/berita/:path*',
    '/pemesanan',
    '/riwayat-pemesanan',
    '/syarat-dan-ketentuan',
    '/tentang',
    '/tiket',
  ],
};
