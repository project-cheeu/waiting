import { WaitApi } from 'Api';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { ApiManager, BASE_URL, getCookie } from 'utils';
import MainPresenter from './MainPresenter';

const $http = new ApiManager();

const MainContainer = (props) => {
  const company_id = getCookie('company_id');

  const fetcher = async (...args) => await $http.get(...args);
  const { data, err } = useSWR(`${BASE_URL}/wait/list/${company_id}`, fetcher, {
    refreshInterval: 3000,
  });
  /* Router */
  /* State */
  const [waitList, setWaitList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const [videoList, setVideoList] = useState([]);

  /* Hooks */
  useEffect(() => {
    handleWaitList();
    // eslint-disable-next-line
  }, [data]);
  useEffect(() => {
    handleNoticeList();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    handleVideoList();
    // eslint-disable-next-line
  }, []);
  /* Functions */
  /**
   * 병원 대기자 목록 조회
   * --
   * @returns
   */
  const handleWaitList = async () => {
    if (err) {
      console.log(err);
    }
    const company = getCookie('company_id');
    const result = await WaitApi.getWaitList(company);
    if (result) {
      setWaitList(result);
      return true;
    } else {
      setWaitList([]);
      return false;
    }
  };

  /**
   * 병원 공지사항 목록 조회
   * --
   * @returns
   */
  const handleNoticeList = async () => {
    const company = getCookie('company_id');
    const result = await WaitApi.getNoticeList(company);
    if (result) {
      setNoticeList(result);
      return true;
    }
    setNoticeList([]);
    return false;
  };

  const handleVideoList = async () => {
    const company = getCookie('company_id');
    const result = await WaitApi.getVideoList(company);
    if (result) {
      setVideoList(result);
      return true;
    }
    setVideoList([]);
    return false;
  };

  /* Render */
  return (
    <MainPresenter
      waitList={waitList}
      noticeList={noticeList}
      videoList={videoList}
    />
  );
};

export default MainContainer;
