import ApiConstnat from './ApiConstant';
import { ApiManager, SUCCESS_CODE } from '../utils';
const $http = new ApiManager();

// eslint-disable-next-line
const api = {
  /**
   * 대기화면 체크
   * --
   * @param {String} company_id
   * @returns
   */
  checkCompany: async (company_id) => {
    try {
      const url = ApiConstnat.CHECK_COMPANY.replace(':company_id', company_id);
      const apiResult = await $http.get(url);
      const { resultCode, resultMessage, resultData } = apiResult;
      if (resultCode === SUCCESS_CODE) {
        return resultData;
      }

      throw resultMessage;
    } catch (error) {
      // console.log(error);
      return false;
    }
  },

  getWaitList: async (company_id) => {
    try {
      const url = ApiConstnat.GET_WAIT_LIST.replace(':company_id', company_id);
      const apiResult = await $http.get(url);
      const { resultCode, resultMessage, resultData } = apiResult;
      if (resultCode === SUCCESS_CODE) {
        return resultData;
      }

      throw resultMessage;
    } catch (error) {
      // console.log(error);
      return false;
    }
  },

  /**
   * 병원 비디오 정보 조회
   * --
   * @param {String} company_id 병원 고유코드
   * @returns
   */
  getVideoList: async (company_id) => {
    try {
      const url = ApiConstnat.GET_VIDEO_LIST.replace(':company_id', company_id);
      const apiResult = await $http.get(url);
      const { resultCode, resultMessage, resultData } = apiResult;
      if (resultCode === SUCCESS_CODE) {
        return resultData;
      }

      throw resultMessage;
    } catch (error) {
      // console.log(error);
      return false;
    }
  },

  /**
   * 병원 공지사항 정보 조회
   * --
   * @param {String} company_id 병원 고유코드
   * @returns
   */
  getNoticeList: async (company_id) => {
    try {
      const url = ApiConstnat.GET_NOTICE_LIST.replace(
        ':company_id',
        company_id
      );
      const apiResult = await $http.get(url);
      const { resultCode, resultMessage, resultData } = apiResult;
      if (resultCode === SUCCESS_CODE) {
        return resultData;
      }

      throw resultMessage;
    } catch (error) {
      // console.log(error);
      return false;
    }
  },
};

export default api;
