import React, { useState } from 'react';
import { Col, Table, Button, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFileExcel, faFilePdf, faFileCsv, faPrint, faAngleDoubleLeft, faChevronLeft, faChevronRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import jsxToString from 'jsx-to-string';
import View from '../View/View';

import { updateObject } from '../../../../shared/utility';

export default ({ fields, array, data, limit, bordered, xs = 12, sm = 12, md = 12, lg = 12, xl = 12, icon, title, add, content, className = '', dark, borderless, innerClassName = '', outerClassName = '', p0, select, children, selectHandler, style }) => {
    const titles = fields.map(({ name, fixed }) => <th className="align-middle text-nowrap bg-soft" style={fixed ? { position: 'sticky', right: 0 } : {}} key={name}>{name}</th>);
    titles.unshift(<th className="text-center align-middle" key="#">SL</th>);
    if (select) titles.unshift(<th className="align-middle text-center" key="select_all">
        <input type="checkbox" onClick={selectHandler} className="select_all" />
    </th>);

    const [show, setShow] = useState(10);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [pageFirst, setPageFirst] = useState(1);
    const [pageSecond, setPageSecond] = useState(2);
    const [pageLast, setPageLast] = useState(3);

    const filteredArray = search === '' ? array : array.filter((item, i) => {
        let check = false;
        for (const iterator of fields) {
            const key = iterator.key;
            if (item[key]) {
                if (typeof item[key] === 'string') check = item[key].toLowerCase().includes(search.toLowerCase());
                else if (typeof item[key] === 'object') check = jsxToString(item[key]).toLowerCase().includes(search.toLowerCase());
                else check = item[key].toString().includes(search.toLowerCase());
                if (check) return check;
            }
        }
    });
    const limitedArray = show === 'All' ? filteredArray : filteredArray.filter((item, i) => (i >= (page - 1) * show) && (i < page * show));

    const pageNumber = Math.ceil(filteredArray.length / show);

    const listContent = limitedArray.map((item, index) => {
        if (limit && index >= limit) return null;
        let inside = [<th className="text-center align-middle" key={'primary' + index}>{(show === 'All' ? 0 : (page - 1) * show) + index + 1}</th>];
        if (select) inside.unshift(<th className="text-center align-middle" key={'secondary' + index}>
            <input type="checkbox" value={item._id} />
        </th>);
        fields.forEach(({ key, minWidth, fixed }) => {
            inside.push(<td className="align-middle text-nowrap" style={updateObject({ minWidth, borderColor: '#DEE2E6' }, fixed ? { position: 'sticky', right: 0, backgroundColor: '#F4F4F4' } : {})} key={key}>{item[key]}</td>);
        });

        return <tr className="align-middle" key={index + 1}>{inside}</tr>;
    });

    const inputChangedHandler = e => {
        const { name, value } = e.target;
        firstPageHandler();
        if (name === 'show') return setShow(value);
        if (name === 'search') return setSearch(value);
    }

    const previousPageHandler = () => {
        const lastPage = pageNumber;
        if (page <= 1) return;
        if (page === 2) firstPageHandler();
        else if (page === lastPage) setPage(page - 1);
        else {
            setPage(page - 1);
            setPageFirst(pageFirst - 1);
            setPageSecond(pageSecond - 1);
            setPageLast(pageLast - 1);
        }
    }

    const nextPageHandler = () => {
        const lastPage = pageNumber;
        if (page >= lastPage) return;
        setPage(page + 1);
        if (page > 2) {
            setPageFirst(pageFirst + 1);
            setPageSecond(pageSecond + 1);
            setPageLast(pageLast + 1);
        }
    }

    const firstPageHandler = () => {
        if (page <= 1) return;
        setPage(1);
        setPageFirst(1);
        setPageSecond(2);
        setPageLast(3);
    }

    const lastPageHandler = () => {
        const lastPage = pageNumber;
        if (page >= lastPage) return;
        setPage(lastPage);
        setPageFirst(lastPage - 2);
        setPageSecond(lastPage - 1);
        setPageLast(lastPage);
    }

    const pageChangeHandler = page => {
        const lastPage = pageNumber;
        let pageFirst;
        if (page === 1) pageFirst = 1;
        else if (page === lastPage) pageFirst = lastPage - 2;
        else pageFirst = page - 1;
        setPage(page);
        setPageFirst(pageFirst);
        setPageSecond(pageFirst + 1);
        setPageLast(pageFirst + 2);
    }

    const onClick = e => {
        e.preventDefault();

        const url = e.target.href;
        exportData(url);
    };

    const exportData = async url => {
        const format = url.split('/')[url.split('/').length - 1];
        const name = title + '.' + format;
        const token = localStorage.getItem('token');

        try {
            const formData = new FormData();

            formData.append('data', data);
            formData.append('name', name);

            const res = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: formData,
                headers: {
                    Authorization: token
                }
            });

            const resData = await res.blob();

            const downloadLink = URL.createObjectURL(resData);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = downloadLink;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(downloadLink);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={outerClassName}>
            <div className={"rounded-4 d-flex justify-content-between align-items-center mb-5 mt-3 py-4 px-4 text-large " + className}>
                <span className="d-inline-flex align-items-center text-700 text-orange">{icon ? <FontAwesomeIcon fixedWidth className="mr-2" icon={icon} size="lg" /> : null}<span className="text-brokenblue">{title}</span></span>

                {add ? <View title={add} content={content}>
                    <Button color="green" size="lg" className="rounded-2">
                        <FontAwesomeIcon icon={faPlusCircle} fixedWidth className="mr-2" />
                        {add}
                    </Button>
                </View> : null}
            </div>

            <div className={"d-flex flex-column " + (dark ? "text-light " : " ") + className} style={style}>
                <div className="p-4 border-bottom border-soft text-orange text-700 position-relative">
                    <Row className="align-items-center justify-content-between">
                        <div className="col-6 pb-2 pb-lg-0 col-lg-2">
                            <div className="d-flex align-items-center text-secondary rounded-2">
                                <div className="px-3 py-2 font-weight-bold h-100 border-bottom border-soft bg-soft">Show</div>
                                <Input type="select" name="show" onChange={inputChangedHandler} className="px-3 py-2 text-center rounded-0 h-100 d-block text-reset border-top-0 border-right-0 border-bottom-0 border-black-20 bg-soft" style={{ width: '5rem' }}>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="All">All</option>
                                </Input>
                            </div>
                        </div>

                        <div className="col-6 d-lg-none pb-2 pb-lg-0">
                            <Input type="search" name="search" onChange={inputChangedHandler} className="bg-soft border-0 rounded-2" placeholder="Search..." />
                        </div>

                        <div className="col-lg-4 pb-2 pb-lg-0 rounded-2 overflow-hidden">
                            <div className="bg-soft d-flex text-secondary justify-content-around align-items-center font-weight-bold py-3">
                                <a href="/api/export/xlsx" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faFileExcel} className="text-darkblue mr-2" />Excel</a>
                                <a href="/api/export/pdf" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faFilePdf} className="text-danger mr-2" />PDF</a>
                                <a href="/api/export/csv" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faFileCsv} className="text-green mr-2" />CSV</a>
                                <a href="/api/export/pdf" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faPrint} className="text-primary mr-2" />Print</a>
                            </div>
                        </div>

                        <div className="col-lg-2 d-none d-lg-block">
                            <Input type="search" name="search" onChange={inputChangedHandler} className="bg-soft border-0 rounded-2" placeholder="Search..." />
                        </div>
                    </Row>
                </div>

                <div className={"flex-fill d-flex flex-column " + (!p0 ? "p-4" : "p-0")}>
                    <div className="table-responsive flex-fill">
                        <Table dark={dark} bordered={bordered} hover borderless={borderless} className={innerClassName}>
                            <thead className="bg-soft text-secondary"><tr>{titles}</tr></thead>
                            <tbody className="bg-soft-50 text-secondary">{listContent}</tbody>
                        </Table>
                    </div>

                    <div>
                        {children}
                    </div>

                    <div>
                        <div>Showing {limitedArray.length} of {filteredArray.length} entries.</div>

                        <div className="pt-2 d-flex justify-content-end">
                            {show === 'All' ? null : <ul className="pagination btn-group">
                                {page === 1 ? null :
                                    <>
                                        <li className="btn btn-yellow" onClick={firstPageHandler}><FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" />First</li>
                                        <li className="btn btn-darkblue text-secondary" onClick={(previousPageHandler)}><FontAwesomeIcon icon={faChevronLeft} /></li>
                                    </>
                                }
                                <li className={"btn btn-darkblue " + (page === pageFirst ? 'text-700 active' : 'secondary')} onClick={() => pageChangeHandler(pageFirst)}>{pageFirst}</li>
                                {pageNumber > 1 ?
                                    <>
                                        <li className={"btn btn-darkblue " + (page === pageSecond ? 'text-700 active' : 'secondary')} onClick={() => pageChangeHandler(pageSecond)}>{pageSecond}</li>
                                        {pageNumber > 2 ?
                                            <li className={"btn btn-darkblue " + (page === pageLast ? 'text-700 active' : 'secondary')} onClick={() => pageChangeHandler(pageLast)}>{pageLast}</li>
                                            : null}
                                        {page === pageNumber ? null :
                                            <>
                                                <li className="btn btn-darkblue text-secondary" onClick={nextPageHandler}><FontAwesomeIcon icon={faChevronRight} /></li>
                                                <li className="btn btn-myprimary" onClick={lastPageHandler}>Last<FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" /></li>
                                            </>
                                        }
                                    </>
                                    : null}
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};