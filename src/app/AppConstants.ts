export class AppConstants {
  public  static SCHEDULER_BASE_URL = 'https://api.litcode.io';
  public  static COMPANY_KEY = '';
  public  static prod = true;

  public static BASE_URL = 'https://api.ideatechnologies.io';
  public static SITE_ID_TEST = '619253bed3392468bea56075';
  public static SITE_ID_PROD = undefined
  
  public static STRIPE_KEY = '';
  
  public static API = {
    LOGIN: AppConstants.BASE_URL + '/auth',
    VERIFY_DOMAIN: AppConstants.BASE_URL + '/sites/verifyDomain',
    CHECK_DOMAIN: AppConstants.BASE_URL + '/sites/checkVerification/',
    SERVICES: AppConstants.BASE_URL + '/services',
    SITE_SERVICES: AppConstants.BASE_URL + '/services/site',
    PRODUCT: AppConstants.BASE_URL + '/products',
    SITE_PRODUCT: AppConstants.BASE_URL + '/products/site',
    SIGNUP: AppConstants.BASE_URL + '//auth/local',
    CREATE_SITE: AppConstants.BASE_URL + '/sites',
    MY_SITE: AppConstants.BASE_URL + '/sites/my',
    UPLOAD: AppConstants.BASE_URL + '/files',
    CREATE_APP:AppConstants.BASE_URL+'/apps',
    USERS:AppConstants.BASE_URL+'/users',
    SLOTS: AppConstants.SCHEDULER_BASE_URL + '/slots/all/',
    SEND_MAIL: '/sendMail',
    GET_APP: '/apps',
    ORDER: '/order/place',
    CONFIRM_ORDER:'/order/status'

  }

  // Test Keys

  public static PAY_TRAIL_AUTH = '';
  public static PAY_TRAIL_MER_ID = '';


  public static PAY_TRAIL_SUCCESS = 'http://mayank.thedogspedia.com/order-status/success';
  public static PAY_TRAIL_FAILED = 'http://mayank.thedogspedia.com/order-status/fail';

  public static PAY_TRAIL_SUCCESS_EXT = 'https://test-tilaus.pianto.io/ext-payment-info/success';
  public static PAY_TRAIL_FAILED_EXT = 'https://test-tilaus.pianto.io/ext-payment-info/fail';

}
