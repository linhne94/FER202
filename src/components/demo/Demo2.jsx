import React, { useState } from 'react'

const Demo2 = () => {

    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];

    const [data, setData] = useState(companies)
    const [input, setInput] = useState('')


    const handleInputChange = (event) => {
        setInput(event.target.value);
        if (event.target.value === "")
            setData(companies)
    };

    const handleFilter = () => {
        const year = parseInt(input);
        if (!isNaN(year)) {
            const filtered = companies.filter((company) => {
                return company.start <= year && company.end >= year;
            });
            setData(filtered);
        }
    };



    return (
        <>
            <div className="container">

                <input
                    type="text"
                    placeholder="Nhập ..."
                    value={input}
                    onChange={handleInputChange}
                />
                <button onClick={handleFilter}>Tìm</button>

                <table class="table table-striped">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Company Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">start</th>
                            <th scope="col">end</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(data => (
                            <tr key={data.name}>
                                <td>{data.name}</td>
                                <td>{data.category}</td>
                                <td>{data.start}</td>
                                <td>{data.end}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Demo2