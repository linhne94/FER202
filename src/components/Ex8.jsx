import React from 'react'

const Ex8 = () => {
    return (<>
        <div className='container'>
            <form className="border border-primary p-4">
                <h1> Form đặt vé máy bay </h1>
                <div className="input-group mb-3">
                    <span className="input-group-text">Họ và Tên</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-text">VNĐ</span>
                </div>
                <label htmlFor="basic-url" className="form-label">Phải nhập 5 ký tự, in hoa ...</label>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Địa chỉ</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <label htmlFor="basic-url" className="form-label">Phải nhập 5 ký tự, in hoa ...</label>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="disabledSelect1" className="form-label">Đi từ</label>
                            <select id="disabledSelect1" className="form-select">
                                <option>Hà Nội</option>
                                <option>Vũng Tàu</option>
                                <option>TP.HCM</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="disabledSelect2" className="form-label">Đến</label>
                            <select id="disabledSelect2" className="form-select">
                                <option>Quy Nhơn</option>
                                <option>Đà Nẵng</option>
                                <option>TP.HCM</option>
                            </select>
                        </div>
                    </div>
                </div>
                <h6>Chọn chiều đi (Khứ hồi )</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Đi
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Về
                    </label>
                </div>
                <input className="btn btn-primary mt-3" type="submit" value="Submit" />
            </form>
        </div>
    </>)
}

export default Ex8