import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import {Component}  from "../components/gsap"


const contacts:NextPage = () => {
  return (
    <Layout title='history'>
      <Component>
        <h2>VBA</h2>
        <p>vbaによる社内システムの設計とリリースを行う</p>
        <br/>
        <h2>HTML,CSS</h2>
        <p>HTML,CSSを用いてポートフォリオサイトの作成</p>
        <br/>
        <h2>javascript(React,next.js)</h2>
        <p>Reactやnext.jsを用いたSPAサイト及びアプリの構築</p>
      </Component>
    </Layout>
  )
}

export default contacts