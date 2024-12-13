import sarah_pfp from '../images/sarah_pfp.jpg'
import michael_pfp from '../images/michael_pfp.webp'
import emily_pfp from '../images/emily_pfp.jpg'

export const ASSETS = {
  LOGO: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33f7a194ea3f09172b504320e53435c3fc9edd4d6faaff83b2893178abc0b441?placeholderIfAbsent=true',
  HERO_IMAGE:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7e88f841c0edd79a5475c97a4daebcc6be8e81203678931598d6b83b9a02f1fe?placeholderIfAbsent=true',
  FEATURE_IMAGE:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/d7ebd8699c6653c2130accdb515511dcbae522e47beabe35f4bf7cab53a2c1c7?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
  TESTIMONIAL_AVATARS: {
    EMILY: emily_pfp,
    MICHAEL: michael_pfp,
    SARAH: sarah_pfp,
  },
  ICONS: {
    STAR: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6492427b26d551634b06b884159efd7b9ff17e227204207e2065cf0e2749ff87?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    STAR_HALF: '/images/icons/star-half.svg',
    ARROW_RIGHT:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    FACEBOOK:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6e7c25e96aa21093c9171c7aa9413af98b57b2882d98ef1ac6c8779340d59cdd?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    TWITTER:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/c16d05b18d4fe831e27fa14bd34aa7e26300bb70e79db3e3e6022680baf57bf1?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    INSTAGRAM:
      'https://static.vecteezy.com/system/resources/thumbnails/032/348/588/small/camera-photography-icon-symbol-image-illustration-of-multimedia-photographic-lens-grapich-design-images-vector.jpg',
    LINKEDIN: 'https://banner2.cleanpng.com/20180518/yk/avraxewhx.webp',
    YOUTUBE:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ec259f1600684b167f3f414e368a21b4e6361983301705fafc19752d20265925?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
  },
} as const

export type AssetType = typeof ASSETS
