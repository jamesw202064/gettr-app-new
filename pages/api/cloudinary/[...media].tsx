import { mediaHandlerConfig, createMediaHandler } from 'next-tinacms-cloudinary/dist/handlers';

import { isAuthorized } from '@tinacms/auth';

export const config = mediaHandlerConfig;

export default createMediaHandler(
  {
    //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //   api_key: process.env.CLOUDINARY_API_KEY,
    //   api_secret: process.env.CLOUDINARY_API,
    cloud_name: 'djlyeefw7',
    api_key: '397795863139856',
    api_secret: 'Bf5Ee_gJWT8TXN3CF0B4FwPjl88',
    authorized: async (req, _res) => {
      try {
        if (process.env.NODE_ENV == 'development') {
          return true;
        }

        const user = await isAuthorized(req);

        return user && user.verified;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  },
  {
    useHttps: true //process.env.NODE_ENV === 'production'
  }
);
