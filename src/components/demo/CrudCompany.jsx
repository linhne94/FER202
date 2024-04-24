import React, { useState } from 'react';

const initialCompanies = [
    { id: 1, name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { id: 2, name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { id: 3, name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { id: 4, name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { id: 5, name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { id: 6, name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { id: 7, name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { id: 8, name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { id: 9, name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const CrudCompany = () => {
    const [companies, setCompanies] = useState(initialCompanies);
    const [data, setData] = useState({
        name: '',
        category: '',
        start: '',
        end: ''
    });
    const [show, setShow] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleAddCompany = () => {
        const newId = companies.length + 1;
        const newCompany = { id: newId, ...data };
        setCompanies([...companies, newCompany]);
        setData({
            name: '',
            category: '',
            start: '',
            end: ''
        });
    };

    const handleUpdateCompany = () => {
        const updatedCompanies = companies.map(company => {
            if (company.id === parseInt(data.id)) {
                return { ...company, name: data.name, category: data.category, start: data.start, end: data.end };
            }
            return company;
        });
        setCompanies(updatedCompanies);
        setData({
            id: '',
            name: '',
            category: '',
            start: '',
            end: ''
        });
        setShowUpdate(false)
    };

    const handleEditCompany = (id) => {
        const companyToEdit = companies.find(company => company.id === id);
        setData({
            id: companyToEdit.id,
            name: companyToEdit.name,
            category: companyToEdit.category,
            start: companyToEdit.start,
            end: companyToEdit.end
        });
        setShowUpdate(!showUpdate)
    };

    const handleShowAddNewCpn = () => {
        setShow(!show)
    }

    const handleDeleteCompany = (id) => {
        const updatedCompanies = companies.filter(company => company.id !== id);
        setCompanies(updatedCompanies);
    };

    return (
        <div>
            <button type="button" class="btn btn-success" onClick={handleShowAddNewCpn}>Add new company</button>
            <h1>Company List</h1>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        {company.name} - {company.category} - {company.start} - {company.end}
                        <button onClick={() => handleEditCompany(company.id)}>Edit</button>
                        <button onClick={() => handleDeleteCompany(company.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div className={show ? "d-block" : "d-none"}>
                <h2>Add New Company</h2>
                <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={data.category} onChange={handleChange} />
                <input type="text" name="start" placeholder="Start" value={data.start} onChange={handleChange} />
                <input type="text" name="end" placeholder="End" value={data.end} onChange={handleChange} />
                <button onClick={handleAddCompany}>Add Company</button>
            </div>
            <div className={showUpdate ? "d-block" : "d-none"}>
                <h2>Update Company</h2>
                <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={data.category} onChange={handleChange} />
                <input type="text" name="start" placeholder="Start" value={data.start} onChange={handleChange} />
                <input type="text" name="end" placeholder="End" value={data.end} onChange={handleChange} />
                <button onClick={handleUpdateCompany}>Update Company</button>
            </div>
        </div>
    );
};

export default CrudCompany;