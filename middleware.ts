export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/dashboard',
    '/paket',
    '/berita',
    '/pemesanan',
    '/riwayat-pemesanan',
    '/syarat-dan-ketentuan',
    '/tentang',
    '/tiket',
  ],
};
