import { BASE_URL } from '../utils';

const WaitConstant = {
  /**
   * @method GET
   * @param {String} company_id
   */
  CHECK_COMPANY: `${BASE_URL}/wait/check/:company_id`,
  /**
   * @method GET
   * @param {String} company_id
   */
  GET_WAIT_LIST: `${BASE_URL}/wait/list/:company_id`,

  /**
   * @method GET
   * @param {String} company_id
   */
  GET_NOTICE_LIST: `${BASE_URL}/notice/:company_id`,
  /**
   * @method GET
   * @param {String} company_id
   */
  GET_VIDEO_LIST: `${BASE_URL}/video/:company_id`,
};

export default WaitConstant;
