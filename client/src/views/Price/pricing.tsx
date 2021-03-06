import React, {useState, useRef, useEffect} from 'react'
import {Layout, Button} from 'antd';
import './pricing.less';
import {Tabs, Slider, InputNumber, Row, Col} from 'antd';
import Head from "views/Main/Head/Head";

const {Header, Footer, Content} = Layout;
const {TabPane} = Tabs;
let flag = false

export default function Pricing(props: any) {
    const [key, setKey] = useState('1');
    const [isHiddenPanel1, hidePanel1] = useState(false);
    const [isHiddenPanel2, hidePanel2] = useState(false);
    const [isHiddenPanel3, hidePanel3] = useState(false);
    const [isHiddenPanel4, hidePanel4] = useState(false);
    const [isHiddenPanel5, hidePanel5] = useState(false);
    const [isHiddenPanel6, hidePanel6] = useState(false);
    const [isHiddenPanel7, hidePanel7] = useState(false);
    const [isHiddenPanel8, hidePanel8] = useState(false);
    const [inputValue, changeInputValue] = useState(0)
    const couterRef: any = useRef();


    function setInputValue(e: any) {
        e.stopPropagation()
        if (flag) {
            let val = e.pageX - couterRef.current.offsetLeft - 10
            if (e.pageX - couterRef.current.offsetLeft < 0) {
                val = 0
            }
            if (e.pageX - couterRef.current.offsetLeft > couterRef.current.clientWidth) {
                val = couterRef.current.clientWidth - 10
            }
            changeInputValue(val)
        }
    }

    function setMouseDown() {
        flag = true
        console.log(flag, 'down')
    }

    function setMouseUp() {
        flag = false
        console.log(flag, '[up]')
    }

    function setBarMouseDown(e: any) {
        e.stopPropagation()
        let val = e.pageX - couterRef.current.offsetLeft - 10
        if (e.pageX - couterRef.current.offsetLeft < 0) {
            val = 0
        }
        if (e.pageX - couterRef.current.offsetLeft > couterRef.current.clientWidth) {
            val = couterRef.current.clientWidth - 10
        }
        changeInputValue(val)
    }

    function setBarMouseUp() {
        flag = false
    }


    return <>
            <div style={{background:"#ffffff"}}>
                <section className="price">
                    <div className="price__describe">
                        <h2 className="title">??????</h2>
                        <p>??????????????????????????????????????????????????????????????????????????????????????????</p>
                        <Button className="trial" size='large' type="primary">????????????</Button>
                    </div>
                    <div className="price__content">
                        <Tabs defaultActiveKey={key} type="card" centered onChange={setKey}>
                            <TabPane tab="????????????" key="1">
                                <div>
                                    <p className='global-site'>* ??????????????????????????????????????? <a href="#">???????????????</a>???</p>
                                    <p className='global-site'>* ??????????????????????????? 30 ??? / ??????</p>
                                </div>
                                <ul className='price-panel'>
                                    <li className={`${isHiddenPanel1 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel1(previous => !previous)
                                        }}>???????????? </h4>
                                        <div className="accordion-content">
                                            <h5 className="accordion-title">?????????????????????</h5>
                                            <table className="table-view">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th><p className="title">?????????</p></th>
                                                    <th>
                                                        <p className="title">?????????</p>
                                                        <p className="description">??????????????????</p>
                                                    </th>
                                                    <th>
                                                        <p className="title">?????????</p>
                                                        <p className="description">??????????????????????????????</p>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th><p className="title">API ??????</p></th>
                                                    <th>3 ?????? / ???</th>
                                                    <th>1.0 ??? / ??????</th>
                                                    <th>????????????</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">????????????</p></th>
                                                    <th>3 ???</th>
                                                    <th>?????? 200 ???</th>
                                                    <th>????????????</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">????????????</p></th>
                                                    <th>?????????</th>
                                                    <th>??????</th>
                                                    <th>??????</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">???????????????</p></th>
                                                    <th>?????????</th>
                                                    <th>??????</th>
                                                    <th>??????</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">????????????</p></th>
                                                    <th>1 ???????????????????????? / ???</th>
                                                    <th>
                                                        <p>2.5 ??? / ????????????</p>
                                                        <p>???????????? 0.8 ??? / GB / ???</p>
                                                    </th>
                                                    <th>????????????</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">LiveQuery</p></th>
                                                    <th>
                                                        <p>??????????????? 100 ??? / ???</p>
                                                        <p>?????????????????? 5000 ??? / ???</p>
                                                    </th>
                                                    <th>
                                                        <p>??????????????? 4.0 ??? / ???</p>
                                                        <p>??????????????? 2.0 ??? / ???</p>
                                                    </th>
                                                    <th>????????????</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">??????????????????</p></th>
                                                    <th>
                                                        <p>?????? 1 GB</p>
                                                        <p className='description'>???????????? 0.10 ??? / GB / ???</p>
                                                    </th>
                                                    <th>0.10 ??? / GB / ???</th>
                                                    <th>????????????</th>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="accordion-content">
                                            <h4 className='accordion-title'>???????????????????????? </h4>
                                            <p>???????????? 10 GB ????????????????????????????????? 0.16 ??? / GB ??????????????????????????????????????????????????????????????????</p>
                                        </div>
                                        <div className="accordion-content">
                                            <h4 className='accordion-title'>???????????????????????? </h4>
                                            <p>?????????????????????</p>
                                            <table className="table-view">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th><p className="title">????????????</p></th>
                                                    <th><p className="title">????????????</p></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th><p className="title">HTTP ??????</p></th>
                                                    <th>
                                                        <p className="title">?????? 500 MB / ???</p>
                                                        <p className="description">???????????? 0.30 ??? / GB</p>
                                                    </th>
                                                    <th>
                                                        <p className="title">???????????????</p>
                                                        <p className="description">0.40 ??? / GB</p>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">HTTP ??????</p></th>
                                                    <th>
                                                        <p className="title">???????????????</p>
                                                        <p className="description">0.36 ??? / GB</p>
                                                    </th>
                                                    <th>
                                                        <p className="title">???????????????</p>
                                                        <p className="description">0.60 ??? / GB</p>
                                                    </th>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel2 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel2(previous => !previous)
                                        }}>????????? + ????????? </h4>
                                        <div className="accordion-content">
                                            <h5 className="accordion-title">???????????????</h5>
                                            <table className="table-view card-view">
                                                <thead>
                                                <tr>
                                                    <th>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">??? / ???</span>
                                                        </p>
                                                    </th>
                                                    <td>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">??? / ???</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">??? / ???</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">??? / ???</span>
                                                        </p>
                                                    </td>
                                                </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel3 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel3(previous => !previous)
                                        }}>???????????????</h4>
                                        <div className="accordion-content">
                                            <p>???????????????????????????????????? 1 GB ????????????????????????????????? 0.8 ??? / GB ??????????????????</p>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel4 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel4(previous => !previous)
                                        }}>?????????????????????</h4>
                                        <div className="accordion-content">
                                            <p>0.36 ??? / GB????????????????????????????????????????????????????????????????????? 1 GB ??????????????? ??????????????????????????????????????????</p>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel5 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel5(previous => !previous)
                                        }}>????????? - LeanCache???Redis??? </h4>
                                        <div className="accordion-content">
                                            <table className="table-view  card-view">
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                            </table>
                                        </div>
                                    </li>
                                    <li className={`${isHiddenPanel6 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel6(previous => !previous)
                                        }}>????????? - MySQL???????????? </h4>
                                        <div className="accordion-content">
                                            <table className="table-view  card-view">
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                            </table>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel7 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel7(previous => !previous)
                                        }}>????????? - MySQL??????????????????</h4>
                                        <div className="accordion-content">
                                            <table className="table-view  card-view">
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">??? / ???</span>
                                                    </p>
                                                </th>
                                            </table>
                                        </div>
                                    </li>

                                </ul>
                            </TabPane>
                            <TabPane tab="?????????" key="2">
                                <div>
                                    <p className='global-site'>* ??????????????????????????????????????? <a href="#">???????????????</a>???</p>
                                    <p className='global-site'>* ??????????????????????????? 30 ??? / ??????</p>
                                </div>
                                <div className="price-calc-group">
                                    <div className="price-calc-title">
                                        ????????????
                                    </div>
                                    <div className="price-calc-group-body">
                                        <div className="price-calc">
                                            <div className="price-calc-heading">
                                                <div className="title">??????????????????</div>
                                                <div className="desc"><span className="currency">??</span> <span
                                                    className="price-tag font-logo">1.00</span>?????????
                                                </div>
                                            </div>
                                            <div className="price-calc-slider">
                                                <div className="custom-slider" ref={couterRef}
                                                     onMouseDown={setBarMouseDown} onMouseUp={setBarMouseUp}
                                                     onMouseOut={setBarMouseUp}>
                                                    <div className="bar" style={{width: `${inputValue}px`}}>

                                                    </div>
                                                    <div className="handle" onMouseDown={setMouseDown}
                                                         onMouseUp={setMouseUp} style={{left: `${inputValue}px`}}
                                                         onMouseMove={setInputValue}>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="price-calc-result">
                                                <div className="price-calc-input">
                                                    <input type="number" min='0'/>
                                                    <span>????????????</span>
                                                </div>
                                                <div className="price-calc-currency">
                                                    <span>RMB</span>
                                                    <span className="price-result">????????????</span>
                                                    <span>??????</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="price-storage">
                                            <div className="price-calc-heading">
                                                <div className="title">??????????????????</div>
                                                <div className="desc"><span className="currency">??</span> <span
                                                    className="price-tag font-logo">1.00</span>?????????
                                                </div>
                                            </div>
                                            <div className="price-calc-slider">
                                                <div className="custom-slider" ref={couterRef}
                                                     onMouseDown={setBarMouseDown} onMouseUp={setBarMouseUp}
                                                     onMouseOut={setBarMouseUp}>
                                                    <div className="bar" style={{width: `${inputValue}px`}}>

                                                    </div>
                                                    <div className="handle" onMouseDown={setMouseDown}
                                                         onMouseUp={setMouseUp} style={{left: `${inputValue}px`}}
                                                         onMouseMove={setInputValue}>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="price-calc-result">
                                                <div className="price-calc-input">
                                                    <input type="number" min='0'/>
                                                    <span>????????????</span>
                                                </div>
                                                <div className="price-calc-currency">
                                                    <span>RMB</span>
                                                    <span className="price-result">????????????</span>
                                                    <span>??????</span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="????????????" key="3">
                                <div>
                                    <p className='global-site'>* ??????????????????????????????????????? <a href="#">???????????????</a>???</p>
                                    <p className='global-site'>* ??????????????????????????? 30 ??? / ??????</p>
                                </div>
                                <ul className='price-panel'>
                                    <li className={`${isHiddenPanel8 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel8(previous => !previous)
                                        }}>????????????????????????????????????</h4>
                                        <div className="accordion-content">
                                            <p><strong>?????????</strong>???????????????????????????????????????????????????????????????????????? LeanCloud
                                                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                            <p><strong>?????????</strong>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                            </p>
                                            <p><strong>?????????</strong>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                LeanCloud
                                                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                LeanCloud ??????????????????????????????????????????????????????LeanCloud ???????????????????????? LeanCloud
                                                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabPane>
                        </Tabs>
                    </div>
                </section>
            </div>
    </>;

}

