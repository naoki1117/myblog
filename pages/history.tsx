import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import {Component}  from "../components/gsap"


const contacts:NextPage = () => {
  return (
    <Layout title='history'>
      <Component>
        <h1 className='underline underline-offset-4'>VBA</h1>
        <p>vbaによる社内システム、ツールの設計とリリースを行う</p>
        <br/>
        <h1 className='underline underline-offset-4'>HTML,CSS</h1>
        <p>HTML,CSSを用いてポートフォリオサイトの作成</p>
        <br/>
        <h1 className='underline underline-offset-4'>javascript(React,next.js)</h1>
        <p>Reactやnext.jsを用いたSPAサイト及びアプリの構築</p>
      </Component>
    </Layout>
  )
}

export default contacts