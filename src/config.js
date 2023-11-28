const BUILD = 'TEST'
const LIVE  = 'https://app.flowglobal.net'
const TEST  = "http://13.234.42.35:8000"//dev test server ip
const HOST  = BUILD == 'TEST' ? TEST : LIVE
const RELEASE_DATE  = '20231111'
const APK_VERSION = '1.25.0'

export const config = {
  basename: '/',
  defaultPath: '/dashboard/default',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  HOST_NAME : `${HOST}/api/mobile/`,
  FILE_HOST : HOST,
  HOST : BUILD,
  APK_VERSION : APK_VERSION,
  APP_SUPPORT : 'Biz Ops (App support)',
  UNKNOWN_ERROR: 'Unknown error occurred. Please report the issue to Biz Ops (App support)',

};

export default config;
